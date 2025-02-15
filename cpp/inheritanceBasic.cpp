#include<iostream>
using namespace std;

class Base {
    public: int x;
};
class Derived : Base {};
int main(){
    Derived d;
    d.x = 20;
    return 0;
}