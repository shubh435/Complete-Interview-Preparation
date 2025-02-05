#include <iostream>
using namespace std;
void fun(int *p){
    *p = *p + 5;
}
int main(){
    int a =10;
    fun(&a);
    cout<<a<<endl;
}