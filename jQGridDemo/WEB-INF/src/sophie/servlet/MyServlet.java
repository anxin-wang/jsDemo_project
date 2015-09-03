package sophie.servlet;

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

import org.json.JSONArray;  
import org.json.JSONObject;  

public class MyServlet extends HttpServlet {
	 
		private ResultSet getAllPersonData(){
	    	try {
				Class.forName("org.sqlite.JDBC");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        Connection conn;
	        Statement stat;
	        ResultSet rs;
			try {
				conn = DriverManager.getConnection("jdbc:sqlite:test.db");
				stat = conn.createStatement();
				rs = stat.executeQuery("select * from people;");
				return rs;
			} catch (SQLException e) {				
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			}
	//		rs.close();
	//	    conn.close();
	    }


	    public void doPost(HttpServletRequest request,
	                      HttpServletResponse response)
	        throws IOException, ServletException
	    {
	    	response.setContentType("text/html;charset=UTF-8");  
	    	response.setHeader("Cache-Control","no-cache");  
	    	JSONObject json = new JSONObject();  
	        JSONArray rows = new JSONArray();  
	    	ResultSet rs=getAllPersonData();
	    	
	    	try{  
	    	     JSONArray persons = new JSONArray();  
	    	     int i=0;
	    	     while(rs.next()){  
	    	    	 JSONArray person = new JSONArray()  
	    		        .put(rs.getString("name"))  
	    		        .put(rs.getString("gender"))  
	    		        .put(rs.getString("birthday"))
	    		        .put(rs.getString("cellphone"))
	    		        .put(rs.getString("address")); 
	    	        JSONObject row=new JSONObject()	        
	    		        .put("cell", person)
	    	            .put("id", rs.getString("id"));
	    	        rows.put(i, row);  
	    	        i++; 
	    	    }  
	    	     json.put("rows", rows)
	    	     .put("page", 1)
	    	     .put("total",2)
	    	     .put("records",13);  	    	     
	    	    }catch(Exception e){  
	    	          e.printStackTrace();  
	    	      }  
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
