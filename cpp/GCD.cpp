#include <iostream>
using namespace std;

int findGCD (int a, int b){
    int ans=1;
    int minAB = min(a,b);
    for(int i=1;i<=minAB;i++){
        if(a%i==0 && b%i==0){
            ans = i;
        }
    }
    return ans;
}

int main () {
    int a,b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    int gcd = findGCD(a,b);
    cout << "GCD of " << a << " and " << b << " is: " << gcd;
    return 0;
}