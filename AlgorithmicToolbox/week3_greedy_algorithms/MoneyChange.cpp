#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef double db; 

int main(){
	int m;
	cin >> m;
	cout << (m / 10 /*number of coins with denomination 10 */ ) + 
		(m % 10 / 5 /*number of coins with denomination 5*/) + 
	        (m % 5 /*number of coins with denomination 1*/) << endl ;
	return 0;
}
