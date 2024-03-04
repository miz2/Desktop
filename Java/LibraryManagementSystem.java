// import java.awt.*;
// import java.awt.event.*;
// import javax.swing.*;
// import javax.swing.table.*;

// public class LibraryManagementSystem extends JFrame implements ActionListener {
//     private JTextField tf1, tf2, tf3, tf4, tf5, tf6, tf7, tf8;
//     private JButton b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20;
//     private JTable table;
//     private JScrollPane pane;
//     private JPanel panel;
//     private DefaultTableModel model;
//     private int id;

//     public LibraryManagementSystem() {
//         model = new DefaultTableModel();
//         model.addColumn("ID");
//         model.addColumn("Book Title");
//         model.addColumn("Author");
//         model.addColumn("Publisher");
//         model.addColumn("Year");
//         model.addColumn("ISBN");

//         table = new JTable(model);
//         pane = new JScrollPane(table);
//         panel = new JPanel();

//         b1 = new JButton("Add Book");
//         b2 = new JButton("Remove Book");
//         b3 = new JButton("Display Book");
//         b4 = new JButton("Update Book");
//         b5 = new JButton("Clear");
//         b6 = new JButton("Close");

//         b1.addActionListener(this);
//         b2.addActionListener(this);
//         b3.addActionListener(this);
//         b4.addActionListener(this);
//         b5.addActionListener(this);
//         b6.addActionListener(this);

//         panel.add(b1);
//         panel.add(b2);
//         panel.add(b3);
//         panel.add(b4);
//         panel.add(b5);
//         panel.add(b6);

//         getContentPane().add(BorderLayout.NORTH, panel);
//         getContentPane().add(BorderLayout.CENTER, pane);

//         setTitle("Library Management System");
//         setSize(600, 400);
//         setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//         setVisible(true);
//     }

//     public void actionPerformed(ActionEvent e) {
//         if (e.getSource() == b1) {
//             tf1 = new JTextField();
//             tf2 = new JTextField();
//             tf3 = new JTextField();
//             tf4 = new JTextField();
//             tf5 = new JTextField();
//             tf6 = new JTextField();
//             tf7 = new JTextField();
//             tf8 = new JTextField();

//             JPanel panel = new JPanel();
//             panel.add(new JLabel("Enter ID: "));
//             panel.add(tf1);
//             panel.add(Box.createRigidArea(new Dimension(10, 0)));
//             panel.add(new JLabel("Enter Book Title: "));
//             panel.add(tf2);
//             panel.add(Box.createRigidArea(new Dimension(10, 0)));
//             panel.add(new JLabel("Enter Author: "));
//             panel.add(tf3);
//             panel.add(Box.createRigidArea(new Dimension(10, 0)));
//             panel.add(new JLabel("Enter Publisher: "));
//             panel.add(tf4);
//             panel.add(Box.createRigidArea(new Dimension(10, 0)));
//             panel.add(new JLabel("Enter Year: "));
//             panel.add(tf5);
//             panel.add(Box.createRigidArea(new Dimension(10, 0)));
//             panel.add(new JLabel("Enter ISBN: "));
//             panel.add(tf6);

//             int result = JOptionPane.showConfirmDialog(null, panel, "Add Book", JOptionPane.OK_CANCEL_OPTION);
//             if (result == JOptionPane.OK_OPTION) {
//                 id = Integer.parseInt(tf1.getText());
//                 String bookTitle = tf2.getText();
//                 String author = tf3.getText();
//                 String publisher = tf4.getText();
//                 int year = Integer.parseInt(tf5.getText());
//                 String isbn = tf6.getText();

//                 model.addRow(new Object[]{id, bookTitle, author, publisher, year, isbn});
//             }
//         }
//     }
//     private void addBookButtonActionPerformed(java.awt.event.ActionEvent evt) {
//         String id = tf1.getText();
//         String bookTitle = tf2.getText();
//         String author = tf3.getText();
//         String publisher = tf4.getText();
    
//         if (id.isEmpty() || bookTitle.isEmpty() || author.isEmpty() || publisher.isEmpty()) {
//             JOptionPane.showMessageDialog(this, "All fields must be filled.", "Error", JOptionPane.ERROR_MESSAGE);
//             return;
//         }
    
//         try {
//             int year = Integer.parseInt(tf5.getText());
    
//             String isbn = tf6.getText();
    
//             model.addRow(new Object[]{id, bookTitle, author, publisher, year, isbn});
//         } catch (NumberFormatException e) {
//             JOptionPane.showMessageDialog(this, "Invalid input for year. Please enter a valid integer.", "Error", JOptionPane.ERROR_MESSAGE);
//         }
//     }
//     public static void main(String[] args) {
//         LibraryManagementSystem lms = new LibraryManagementSystem();
//     }
// }

