import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LCSFinderGUI extends JFrame {

    private JTextField input1Field, input2Field;
    private JTextArea resultArea;

    public LCSFinderGUI() {
        setTitle("Longest Common Subsequence Finder");
        setSize(550, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 1, 15, 15));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setBackground(new Color(255, 240, 220));

        Font labelFont = new Font("Arial", Font.BOLD, 16);

        JLabel input1Label = new JLabel("Enter String 1:");
        input1Label.setFont(labelFont);
        input1Label.setForeground(new Color(70, 130, 180));
        input1Field = new JTextField();
        input1Field.setBorder(BorderFactory.createLineBorder(new Color(70, 130, 180)));
        input1Field.setBackground(new Color(255, 240, 220));

        JLabel input2Label = new JLabel("Enter String 2:");
        input2Label.setFont(labelFont);
        input2Label.setForeground(new Color(70, 130, 180));
        input2Field = new JTextField();
        input2Field.setBorder(BorderFactory.createLineBorder(new Color(70, 130, 180)));
        input2Field.setBackground(new Color(255, 240, 220));

        JButton findButton = new JButton("Find LCS");
        findButton.setBackground(new Color(34, 139, 34));
        findButton.setForeground(Color.WHITE);
        findButton.setFocusPainted(false);
        findButton.setFont(new Font("Georgia", Font.BOLD, 14));
        findButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String input1 = input1Field.getText();
                String input2 = input2Field.getText();
                String lcs = findLongestCommonSubsequence(input1, input2);
                resultArea.setText("Longest Common Subsequence:\n" + lcs);
            }
        });

        resultArea = new JTextArea();
        resultArea.setEditable(false);
        resultArea.setLineWrap(true);
        resultArea.setWrapStyleWord(true);
        resultArea.setFont(new Font("Courier New", Font.PLAIN, 12));
        resultArea.setBorder(BorderFactory.createLineBorder(new Color(70, 130, 180)));
        resultArea.setBackground(new Color(255, 250, 250));
        JScrollPane resultScrollPane = new JScrollPane(resultArea);
        resultScrollPane.setBorder(BorderFactory.createTitledBorder("Result"));

        panel.add(input1Label);
        panel.add(input1Field);
        panel.add(input2Label);
        panel.add(input2Field);
        panel.add(findButton);
        panel.add(resultScrollPane);

        add(panel);

        // Center the frame on the screen
        setLocationRelativeTo(null);

        setVisible(true);
    }

    private String findLongestCommonSubsequence(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 || j == 0)
                    dp[i][j] = 0;
                else if (str1.charAt(i - 1) == str2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        int index = dp[m][n];
        char[] lcs = new char[index];
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                lcs[index - 1] = str1.charAt(i - 1);
                i--;
                j--;
                index--;
            } else if (dp[i - 1][j] > dp[i][j - 1])
                i--;
            else
                j--;
        }

        return new String(lcs);
    }


    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new LCSFinderGUI();
            }
        });
    }
}
