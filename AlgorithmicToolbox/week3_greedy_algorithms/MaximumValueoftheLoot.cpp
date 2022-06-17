#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef double db;

int main(){
	int n, w;
	db ans = 0;
	cin >> n >> w;
	vector<pair<db, pair<int, int>>> container(n);    
	for(int i=0; i < n;i++){
		cin >> container[i].second.first >> container[i].second.second ;
		container[i].first = 1.00 * container[i].second.first / container[i].second.second;
	}
	sort( container.begin(), container.end(), greater<pair<db, pair<int, int>>>());
	for(int i = 0; i < n and w != 0; i++){
		ans += min(w, container[i].second.second) * container[i].first;
		w -= min(w, container[i].second.second);
	}
	cout << fixed << setprecision(4) << ans << endl;
	return 0;
} 

	
		
