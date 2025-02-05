#include <iostream>
using namespace std;

void f(int a[]) {
    int n = sizeof(a) / sizeof(int); // Incorrect size calculation
    for (int i = 0; i < n; i++) {
        cout << a[i] << ' ';
    }
    cout << '\n';
}

void f(int a[], int N) {
    int n = N; // Correct size passed explicitly
    for (int i = 0; i < n; i++) {
        cout << a[i] << ' ';
    }
    cout << '\n';
}

int main() {
    int a[] = {1, 2, 3, 4, 5};
    int n = sizeof(a) / sizeof(int); // Correct size calculation in main
    for (int i = 0; i < n; i++) {
        cout << a[i] << ' ';
    }
    cout << '\n';

    f(a);    
    f(a, n); 
    return 0;
}