#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef double db;
#define all(v) v.begin(), v.end()
#define mp make_pair
#define pb push_back
#define endl '\n' 
int main (){
	int n;
	long long ans = 0;
	cin >>	n;
	vector<long long> sequences1(n), sequences2(n);
	for(int i = 0; i < n;i++)
		cin >> sequences1[i];
	for(int i = 0; i < n;i++)
		cin >> sequences2[i];
	sort(sequences1.begin(), sequences1.end());
	sort(sequences2.begin(), sequences2.end());
	for(int i=0; i < n;i++) ans += sequences1[i] * sequences2[i];
	cout << ans;
}
