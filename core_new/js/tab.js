(function ($) {

    $.fn.tabs = function () {
        return this.each(function() {
            var $this = $(this);
            var $active, $content, $links = $this.find('li.tab a'),$index = 0;
            $active = $($links.filter('[href="'+location.hash+'"]'));

            // If no match is found, use the first link or any with class 'active' as the initial active tab.
            if ($active.length === 0) {
                $active = $(this).find('li.tab a.active').first();
            }
            if ($active.length === 0) {
                $active = $(this).find('li.tab a').first();
            }

            $active.addClass('active');
            $index = $links.index($active);
            if ($index < 0) {
                $index = 0;
            }

            $content = $($active[0].hash);
            // Hide the remaining content
            $links.not($active).each(function () {
                $(this.hash).hide();
            });

            // Bind the click event handler
            $this.on('click', 'a', function(e){
                // Make the old tab inactive.
                $active.removeClass('active');
                $content.hide();

                // Update the variables with the new link and content
                $active = $(this);
                $content = $(this.hash);
                $links = $this.find('li.tab a');

                // Make the tab active.
                $active.addClass('active');
                var $prev_index = $index;
                $index = $links.index($(this));
                if ($index < 0) {
                    $index = 0;
                }
                // Change url to current tab
//      window.location.hash = $active.attr('href');

                $content.show();

                // Prevent the anchor's default click action
                e.preventDefault();
            });




        });
    };
}( jQuery ));
