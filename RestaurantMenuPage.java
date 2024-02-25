import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class RestaurantMenuPage {
    private JFrame frame;
    private JPanel panel;
    private JLabel titleLabel;
    private JButton viewMenuButton;

    public RestaurantMenuPage() {
        frame = new JFrame("Restaurant Menu");
        panel = new JPanel();
        titleLabel = new JLabel("Welcome to Our Restaurant!");
        viewMenuButton = new JButton("View Menu");

        setupUI();
        addListeners();

        frame.add(panel);
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    private void setupUI() {
        panel.setLayout(new BorderLayout());
        panel.add(titleLabel, BorderLayout.NORTH);
        panel.add(viewMenuButton, BorderLayout.CENTER);
    }

    private void addListeners() {
        viewMenuButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Open the menu page
                showMenuPage();
            }
        });
    }

    private void showMenuPage() {
        frame.setVisible(false); // Hide the current frame

        JFrame menuFrame = new JFrame("Menu");
        JPanel menuPanel = new JPanel();
        JLabel menuLabel = new JLabel("Menu:");

        // Hardcoded menu items
        String[] menuItems = {"Burger", "Pizza", "Pasta", "Salad", "Sandwich"};

        // Create a list to display the menu items
        JList<String> menuList = new JList<>(menuItems);
        JScrollPane scrollPane = new JScrollPane(menuList);

        menuPanel.setLayout(new BorderLayout());
        menuPanel.add(menuLabel, BorderLayout.NORTH);
        menuPanel.add(scrollPane, BorderLayout.CENTER);

        menuFrame.add(menuPanel);
        menuFrame.setSize(300, 200);
        menuFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE); // Close only the menu frame
        menuFrame.setLocationRelativeTo(frame); // Open menu frame relative to the main frame
        menuFrame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new RestaurantMenuPage();
            }
        });
    }
}
