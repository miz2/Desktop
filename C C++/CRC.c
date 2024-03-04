#include <stdio.h>
#include <stdint.h>
#include <string.h>
#define CRC32_POLYNOMIAL 0x04C11DB7

uint32_t calculateCRC32(const uint8_t *data, int length) {
    uint32_t crc = 0xFFFFFFFF;
    for (int i = 0; i < length; i++) {
        crc ^= data[i];
        for (int j = 0; j < 8; j++) {
            if (crc & 0x80000000) {
                crc = (crc << 1) ^ CRC32_POLYNOMIAL;
            } else {
                crc = (crc << 1);
            }
        }
    }
    return crc;
}

int main() {
    char data[256];
    char generator_polynomial[256];

    printf("Enter the data to be transmitted: ");
    scanf("%s", data);

    printf("\nEnter the Generating polynomial: ");
    scanf("%s", generator_polynomial);

    uint32_t crcResult = calculateCRC32((const uint8_t *)data, strlen(data));

    printf("CRC-32: 0x%08X\n", crcResult);

    if (crcResult == calculateCRC32((const uint8_t *)data, strlen(data))) {
        printf("The CRC is valid.\n");
    } else {
        printf("The CRC is invalid.\n");
    }

    return 0;
}
