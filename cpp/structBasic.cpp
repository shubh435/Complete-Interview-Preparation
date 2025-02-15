#include <iostream>
using namespace std;

struct Point
{
    int x;
    int y;
    Point(int a, int b) {
        x = a;
        y = b;
    }
    void print() {
        cout << x << " " << y << endl;
    }
};

int main() {
    Point p1(1, 2);
    p1.print();
    return 0;
}
