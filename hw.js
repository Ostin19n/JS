import java.util.*;

public class PhoneBook {
    public static void main(String[] args) {
        HashMap<String, List<String>> phoneBook = new HashMap<>();
        addContact(phoneBook, "Смирнов", "2-12-84");
        addContact(phoneBook, "Петров", "2-15-83");
        addContact(phoneBook, "Смирнов", "2-15-80");
        addContact(phoneBook, "Попов", "2-11-82");
        addContact(phoneBook, "Соколов", "2-13-90");
        addContact(phoneBook, "Попов", "2-14-79");
        addContact(phoneBook, "Сидоров", "2-10-60");
        // System.out.println(phoneBook);
        printAndSortBook(phoneBook);
    }

    // метод добовления в лист
    public static void addContact(HashMap<String, List<String>> phoneBook, String lastName, String phone) {
        List<String> phones = phoneBook.getOrDefault(lastName, new ArrayList<>());
        phones.add(phone);
        phoneBook.put(lastName, phones);
    }

    public static void printAndSortBook(HashMap<String, List<String>> phoneBook) {
        List<Map.Entry<String, List<String>>> sortedList = new ArrayList<>(phoneBook.entrySet());
        sortedList.sort((a, b) -> Integer.compare(b.getValue().size(), a.getValue().size()));
        for (Map.Entry<String, List<String>> entry : sortedList) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

    }
}
