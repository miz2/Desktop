#include <stdio.h>

    // Function to perform bit stuffing
    void bitStuffing(char data[], int *size) {
        int count = 0; // Initialize a count variable to keep track of consecutive 1s
        printf("Original Data: %s\n", data);
    
        int newSize = *size; // Store the original size
        // Loop through the original data
        for (int i = 0; i < newSize; i++) {
            printf("%c", data[i]);
            if (data[i] == '1') {
                count++;
            } else {
                count = 0;
            }
            // If 5 consecutive 1s are encountered, insert a '0'
            if (count == 5) {
                // Shift the elements to make space for the extra '0'
                for (int j = *size; j > i + 1; j--) {
                    data[j] = data[j - 1];
                }
                // Insert '0' at the appropriate position
                data[i + 1] = '0';
                (*size)++; // Increase the size of the array
                count = 0; // Reset the count
            }
        }
        printf("\n");
    }
    
    int main() {
        char data[] = "011111110110111111110";
        int size = sizeof(data) - 1; // Subtract 1 to exclude the null terminator
    
        printf("Original Size: %d\n", size);
        bitStuffing(data, &size);
        printf("Modified Data: %s\n", data);
    
        return 0;
    }
