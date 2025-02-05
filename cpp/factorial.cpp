#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int ans = 1;
    while(n>0){
        ans = ans * n;
        n--;
    }
    cout << "Factorial of the number is: " << ans << endl;
    return 0;
}