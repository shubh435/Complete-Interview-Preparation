#include <iostream>
#include <string>
using namespace std;

class CollegeCourse
{
    private: 
        string courseId;
        char grade;
        int credits;
        int gradePoints;
        float honorPoints;
        
    public:
        // 1. set_CourseId(string CID) : sets courseId
        void set_CourseId(string CID) {
            courseId = CID;
        }
        
        // 2. set_Grade(char g) : sets grade equal to g 
        void set_Grade(char g) {
            grade = toupper(g);
        }
        
        // 3. set_Credit(int cr) : sets credits equal to cr 
        void set_Credit(int cr) {
            credits = cr;
        }
        
        // 4. calculateGradePoints(char g) : return gradePoint(int)
        int calculateGradePoints(char g) {
            g = toupper(g);
            switch(g) {
                case 'A': return 10;
                case 'B': return 9;
                case 'C': return 8;
                case 'D': return 7;
                case 'E': return 6;
                case 'F': return 5;
                default: return 0;
            }
        }
        
        // 5. calculateHonorPoints(int gp, int cr) : return honorPoints(float)
        float calculateHonorPoints(int gp, int cr) {
            return gp * cr;
        }
        
        // 6. display() : prints gradePoint and honorPoint
        void display() {
            gradePoints = calculateGradePoints(grade);
            honorPoints = calculateHonorPoints(gradePoints, credits);
            cout << gradePoints << " " << honorPoints << endl;
        }
};

int main() {
    CollegeCourse course;
    string courseId;
    char grade;
    int credits;
    
    // Example input
    courseId = "CSN-206";
    grade = 'A';
    credits = 4;
    
    course.set_CourseId(courseId);
    course.set_Grade(grade);
    course.set_Credit(credits);
    course.display();
    
    // Another example input
    courseId = "ECE-500";
    grade = 'd';
    credits = 3;
    
    course.set_CourseId(courseId);
    course.set_Grade(grade);
    course.set_Credit(credits);
    course.display();
    
    return 0;
}
