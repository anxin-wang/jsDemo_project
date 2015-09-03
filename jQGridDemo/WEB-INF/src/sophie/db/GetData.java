package sophie.db;

import java.sql.*;
import org.json.JSONArray;  
import org.json.JSONObject; 

public class GetData {
  public static void main(String[] args) throws Exception {
    Class.forName("org.sqlite.JDBC");
    Connection conn =
      DriverManager.getConnection("jdbc:sqlite:test.db");
    Statement stat = conn.createStatement();
    stat.executeUpdate("drop table if exists people;");
    stat.executeUpdate("create table people (id,name,gender,birthday,cellphone,address);");
    PreparedStatement prep = conn.prepareStatement(
      "insert into people values (?, ?);");

    prep.setString(1, "Gandhi");
    prep.setString(2, "politics");
    prep.addBatch();
    prep.setString(1, "Turing");
    prep.setString(2, "computers");
    prep.addBatch();
    prep.setString(1, "Wittgenstein");
    prep.setString(2, "smartypants");
    prep.addBatch();

    conn.setAutoCommit(false);
    prep.executeBatch();
    conn.setAutoCommit(true);

    ResultSet rs = stat.executeQuery("select * from people;");
    JSONObject json = new JSONObject();  
    JSONArray rows = new JSONArray();  
    int i=0;
    while (rs.next()) {
//      System.out.println("Name = " + rs.getString("name"));
//      System.out.println("Gender = " + rs.getString("gender"));
//      System.out.println("Birthday = " + rs.getString("birthday"));
//      System.out.println("Contact details = " + rs.getString("cellphone"));
//      System.out.println("Address = " + rs.getString("address"));
    	
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
    .put("page", "1")
    .put("total",2)
    .put("records","13");  
    System.out.println(json.toString());  
    rs.close();
    conn.close();
  }
}
