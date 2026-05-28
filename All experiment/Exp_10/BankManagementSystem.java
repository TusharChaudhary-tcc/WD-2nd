abstract class BankAccount {
    // Private data members
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber,
                       String accountHolderName,
                       double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getter Methods
    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Setter Method
    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Deposit Method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited successfully.");
        } else {
            System.out.println("Invalid amount.");
        }
    }

    // Display Method
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : " + balance);
    }

    abstract double calculateInterest();
}

// Inheritance:
// SavingsAccount inherits BankAccount
class SavingsAccount extends BankAccount {
    private double interestRate = 5.0;

    // Constructor
    public SavingsAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        // Calling parent constructor
        super(accountNumber, accountHolderName, balance);
    }

    // Implementing abstract method
    @Override
    double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }
}

// Inheritance:
// CurrentAccount inherits BankAccount
class CurrentAccount extends BankAccount {
    private double interestRate = 2.0;

    // Constructor
    public CurrentAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        // Calling parent constructor
        super(accountNumber, accountHolderName, balance);
    }

    // Implementing abstract method
    @Override
    double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }
}

// MAIN CLASS
public class BankManagementSystem {
    public static void main(String[] args) {

        // Creating Savings Account Object
        SavingsAccount sa = new SavingsAccount(
            "2500221125",
            "Prashant Sharma",
            10000
        );

        // Deposit money
        sa.deposit(5000);

        // Display account details
        System.out.println("\n===== Savings Account =====");
        sa.displayDetails();

        // Calculate interest
        System.out.println("Interest : " + sa.calculateInterest());

        // Creating Current Account Object
        CurrentAccount ca = new CurrentAccount(
            "2500221126",
            "Tushar Chaudhary",
            200000
        );

        // Deposit money
        ca.deposit(3000);

        // Display account details
        System.out.println("\n===== Current Account =====");
        ca.displayDetails();

        // Calculate interest
        System.out.println("Interest : " + ca.calculateInterest());
    }
}