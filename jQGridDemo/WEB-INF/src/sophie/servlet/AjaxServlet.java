package sophie.servlet;



import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

import org.json.JSONArray;  
import org.json.JSONObject;  

public class AjaxServlet extends HttpServlet {
	    public void doPost(HttpServletRequest request,
	                      HttpServletResponse response)
	        throws IOException, ServletException
	    {
	    	response.setContentType("text/html;charset=UTF-8");  
	    	response.setHeader("Cache-Control","no-cache");
	    	String username=request.getParameter("username");
	    	String password=request.getParameter("password");
	    	JSONObject json = new JSONObject();  
	        json.put("username", username)
	            .put("password", password);
	    	System.out.println(json.toString());  
	    	response.getWriter().write(json.toString()); 
	    }
	    
	    
	   
	    public void doGet(HttpServletRequest request,
                HttpServletResponse response)
		  throws IOException, ServletException
		{
			doPost(request, response);
		//	response.setContentType("text/html;charset=utf-8"); 
		//	PrintWriter out = response.getWriter();
		//	String name = request.getParameter("name");
		//	String id = request.getParameter("id");
		//	System.out.println(name);
		//	System.out.println(id); 
		
		}

}

