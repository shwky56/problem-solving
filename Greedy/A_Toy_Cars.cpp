#include<bits/stdc++.h>

using namespace std;

int main()
{
	int n;
	cin>>n;
	int a,i;
	vector<int> v;
	for(i=0; i<n; i++)
	{
	int t=0;
	for(int j=0; j<n; j++)
	{
		cin>>a;
		if(a==1||a==3)
			t++;
	}
	if(t==0)
		v.push_back(i+1);
	}
	cout<<v.size()<<endl;
	for(int i=0; i<v.size(); i++)
		cout<<v[i]<<' ';
}
