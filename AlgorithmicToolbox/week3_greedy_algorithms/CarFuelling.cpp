#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef double db;
#define all(v) v.begin(), v.end()
#define mp make_pair
#define pb push_back
#define endl '\n'
int main(){
	int n, d, m, ans = 0, i, w;
	cin >> d >> m  >> n;
	vector<int> stop(n+2);
	cin >> stop[0];
	stop[n]  = d;
	for(i = 1; i < n; i++){
		cin >> stop[i];
		if(stop[i] - stop[i-1] > m) ans = -1;
	} 
	w = m;
	if (d - stop[n-1] > m or ans == -1 or w < stop[0])
		return cout << -1, 0;
        	
	for(i = 0;i < n+1;i++){
		if(  w < stop[i]){
				ans++;
				w = stop[i-1] + m;
		}
	}
	cout << ans ;
}
 
		
