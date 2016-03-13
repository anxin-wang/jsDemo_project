+function ($) {
  'use strict';

  var toggle   = '.dropdown-toggle'
  var caret = '<i class="sicon caret">&#xe614;</i>'
  var menu= $('.dropdown-menu')

  var Dropdown = function (element) {
    $(element).on('click.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()
    changeValues()

    if (!isActive) {
      //if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
      //  // if mobile we use a backdrop because click events don't delegate
      //  $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      //}
      //
      //var relatedTarget = { relatedTarget: this }
      //$parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
      //
      //if (e.isDefaultPrevented()) return
      //
      //$this
      //  .trigger('focus')
      //  .attr('aria-expanded', 'true')

      $parent.toggleClass('open')
        //.trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

    function changeValues(){
      $('li',menu).click(function(){
          $(toggle).html($(this).html()+caret);
      })
    }

  function clearMenus(e) {
    if (e && e.which === 3) return
    //$(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent.removeClass('open').trigger('hidden.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var constructor  = $this.data('dropdown')

      if (!constructor) $this.data('dropdown', (constructor = new Dropdown(this)))
      if (typeof option == 'string') constructor[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).on('click.dropdown.data-api', clearMenus)


}(jQuery);
