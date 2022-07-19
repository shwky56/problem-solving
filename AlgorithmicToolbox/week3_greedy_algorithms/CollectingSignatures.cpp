#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef double db;

int main(){
	int n, ans = 0, first, second;
	cin >> n ;
	vector<pair<int, int>> pairs(n);
	vector<int> ans1(n);    
	for(int i=0; i < n;i++)		cin >> pairs[i].second >> pairs[i].first ;
	sort( pairs.begin(), pairs.end());
//	first = pairs[0].second;
	for(int i = 0; i < n ; i = i){
		if(i == n-1){
			ans1[ans] = pairs[i].first;
                                ans++;
				i++;
		}
		for(int j= i+1; j < n;j++){
			if(pairs[i].first < pairs[j].second ){
				ans1[ans] = pairs[i].first;
				ans++;
				i = j;
				break;
			}
			else if (j == n-1){
				ans1[ans] = pairs[i].first;
				ans++;
				i = n+1;
			}
		}
	}
	cout << ans << endl ;
	for (int i =0; i < ans ;i++)
		cout << ans1[i] << ' ';
	return 0;
} 

	
		
