#include <iostream>
using namespace std;

int main(){
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int count =0;
    while(n > 0){
        n = n / 10;
        count ++;
    }
    cout << "Number of digits in the number is: " << count<<endl;
    return 0;
}