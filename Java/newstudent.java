// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import javax.swing.JOptionPane;

// public class newstudent extends javax.swing.JFrame {

//     public newstudent() {
//         initComponents();
//     }

//     @SuppressWarnings("unchecked")
//     // <editor-fold defaultstate="collapsed" desc="Generated Code">
//     private void initComponents() {

//         jLabel6 = new javax.swing.JLabel();
//         jLabel1 = new javax.swing.JLabel();
//         jLabel2 = new javax.swing.JLabel();
//         jLabel3 = new javax.swing.JLabel();
//         jLabel4 = new javax.swing.JLabel();
//         jLabel5 = new javax.swing.JLabel();
//         jTextField1 = new javax.swing.JTextField();
//         jTextField2 = new javax.swing.JTextField();
//         jTextField3 = new javax.swing.JTextField();
//         jComboBox1 = new javax.swing.JComboBox<>();
//         jComboBox2 = new javax.swing.JComboBox<>();
//         jButton1 = new javax.swing.JButton();
//         jButton2 = new javax.swing.JButton();
//         jLabel7 = new javax.swing.JLabel();

//         setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
//         getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

//         jLabel1.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jLabel1.setText("Name");
//         getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(124, 122, -1, -1));

//         jLabel2.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jLabel2.setText("Student ID");
//         getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(124, 72, -1, -1));

//         jLabel3.setFont(new java.awt.Font("Segoe UI", 3, 14));
//         jLabel3.setText("Father's name");
//         getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(124, 170, -1, -1));

//         jLabel4.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jLabel4.setText("Course");
//         getContentPane().add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(124, 204, -1, -1));

//         jLabel5.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jLabel5.setText("Branch");
//         getContentPane().add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(124, 257, -1, -1));

//         jTextField1.setBackground(new java.awt.Color(255, 255, 153));
//         getContentPane().add(jTextField1, new org.netbeans.lib.awtextra.AbsoluteConstraints(258, 72, 112, -1));

//         jTextField2.setBackground(new java.awt.Color(255, 255, 102));
//         getContentPane().add(jTextField2, new org.netbeans.lib.awtextra.AbsoluteConstraints(258, 122, 112, -1));

//         jTextField3.setBackground(new java.awt.Color(255, 255, 153));
//         getContentPane().add(jTextField3, new org.netbeans.lib.awtextra.AbsoluteConstraints(272, 170, 124, -1));

//         jComboBox1.setModel(new javax.swing.DefaultComboBoxModel<>(new String[]{"B.TECH"}));
//         getContentPane().add(jComboBox1, new org.netbeans.lib.awtextra.AbsoluteConstraints(272, 204, 124, -1));

//         jComboBox2.setModel(new javax.swing.DefaultComboBoxModel<>(new String[]{"CSE", "MECHANICAL", "CHEMICAL", "CIVIL", "PETROLEUM", "AERODYNAMICS"}));
//         getContentPane().add(jComboBox2, new org.netbeans.lib.awtextra.AbsoluteConstraints(272, 257, -1, -1));

//         jButton1.setBackground(new java.awt.Color(255, 204, 204));
//         jButton1.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jButton1.setText("SAVE");
//         jButton1.addActionListener(new java.awt.event.ActionListener() {
//             public void actionPerformed(java.awt.event.ActionEvent evt) {
//                 jButton1ActionPerformed(evt);
//             }
//         });
//         getContentPane().add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(239, 316, -1, -1));

//         jButton2.setBackground(new java.awt.Color(204, 204, 255));
//         jButton2.setFont(new java.awt.Font("Segoe UI", 1, 14));
//         jButton2.setText("CLOSE");
//         jButton2.addActionListener(new java.awt.event.ActionListener() {
//             public void actionPerformed(java.awt.event.ActionEvent evt) {
//                 jButton2ActionPerformed(evt);
//             }
//         });
//         getContentPane().add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(329, 316, -1, -1));

//         jLabel7.setIcon(new javax.swing.ImageIcon(getClass().getResource("/BACKGROUN3.jpeg")));
//         jLabel7.setText("jLabel7");
//         getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(-129, -10, 1670, 500));

//         pack();
//     }// </editor-fold>

//     private void jTextField3ActionPerformed(java.awt.event.ActionEvent evt) {
//         // TODO add your handling code here:
//     }

//     private void jTextField2ActionPerformed(java.awt.event.ActionEvent evt) {
//         // TODO add your handling code here:
//     }

//     private void jTextField1ActionPerformed(java.awt.event.ActionEvent evt) {
//         // TODO add your handling code here:
//     }

//     private void jComboBox2ActionPerformed(java.awt.event.ActionEvent evt) {
//         // TODO add your handling code here:
//     }

//     private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {
//         // Save button action
//         saveStudentInfo();
//     }

//     private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {
//         // Close button action
//         closeApplication();
//     }

//     private void saveStudentInfo() {
//         String studentID = jTextField1.getText();
//         String name = jTextField2.getText();
//         String fathername = jTextField3.getText();
//         String course = (String) jComboBox1.getSelectedItem();
//         String branch = (String) jComboBox2.getSelectedItem();

//         try {
//             Connection con = connection.getConnection(); // Use your connection class here

//             String query = "INSERT INTO student (studentID, name, fathername, course, branch) VALUES (?, ?, ?, ?, ?)";
//             try (PreparedStatement pstmt = con.prepareStatement(query)) {
//                 pstmt.setString(1, studentID);
//                 pstmt.setString(2, name);
//                 pstmt.setString(3, fathername);
//                 pstmt.setString(4, course);
//                 pstmt.setString(5, branch);

//                 int result = pstmt.executeUpdate();

//                 if (result > 0) {
//                     JOptionPane.showMessageDialog(this, "Student information saved successfully.");
//                 } else {
//                     JOptionPane.showMessageDialog(this, "Error saving student information.");
//                 }
//             }
//         } catch (Exception e) {
//             JOptionPane.showMessageDialog(this, "Error: " + e.getMessage());
//         }
//     }

//     private void closeApplication() {
//         System.exit(0);
//     }

//     public static void main(String args[]) {
//         java.awt.EventQueue.invokeLater(new Runnable() {
//             public void run() {
//                 new newstudent().setVisible(true);
//             }
//         });
//     }

//     // Variables declaration - do not modify
//     private javax.swing.JButton jButton1;
//     private javax.swing.JButton jButton2;
//     private javax.swing.JComboBox<String> jComboBox1;
//     private javax.swing.JComboBox<String> jComboBox2;
//     private javax.swing.JLabel jLabel1;
//     private javax.swing.JLabel jLabel2;
//     private javax.swing.JLabel jLabel3;
//     private javax.swing.JLabel jLabel4;
//     private javax.swing.JLabel jLabel5;
//     private javax.swing.JLabel jLabel6;
//     private javax.swing.JLabel jLabel7;
//     private javax.swing.JTextField jTextField1;
//     private javax.swing.JTextField jTextField2;
//     private javax.swing.JTextField jTextField3;
//     // End of variables declaration
// }
