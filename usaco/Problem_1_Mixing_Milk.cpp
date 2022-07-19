#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
#include <complex>
#include <queue>
#include <set>
#include <unordered_set>
#include <list>
#include <chrono>
#include <random>
#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>
#include <vector>
#include <map>
#include <unordered_map>
#include <stack>
#include <iomanip>
#include <fstream>
 
using namespace std;
 
typedef long long ll;
typedef long double ld;
typedef pair<int,int> p32;
typedef pair<ll,ll> p64;
typedef pair<double,double> pdd;
typedef vector<ll> v64;
typedef vector<int> v32;
typedef vector<vector<int> > vv32;
typedef vector<vector<ll> > vv64;
typedef vector<vector<p64> > vvp64;
typedef vector<p64> vp64;
typedef vector<p32> vp32;
ll MOD = 998244353;
double eps = 1e-12;
#define iin(x)        scanf("%d", &x)
#define pr(x)         printf("%d\n", x)
#define forn(i,e) for(int i = 0; i < e; i++)
#define forsn(i,s,e) for(ll i = s; i < e; i++)
#define rforn(i,s) for(ll i = s; i >= 0; i--)
#define rforsn(i,s,e) for(ll i = s; i >= e; i--)
#define ln "\n"
#define dbg(x) cout<<#x<<" = "<<x<<ln
#define mp make_pair
#define pb push_back
#define fi first
#define se second
#define INF 2e18
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define all(x) (x).begin(), (x).end()
#define sz(x) ((ll)(x).size())
 void file(const char in[], const char out[]){
     freopen(in, "r", stdin);
	freopen(out , "w", stdout);

 }
const int N = 3;
int capacity[N], milk[N];
void pour(int i, int j)
{
	int amt=std::min(milk[i], capacity[j]-milk[j]);
	// Amount of milk to pour is the minimum of the remaining milk in bucket i 
	// and the available capacity in bucket j
	milk[i] -= amt;
	milk[j] += amt;
}

int main()
{
	freopen("mixmilk.in", "r", stdin);
	freopen("mixmilk.out", "w", stdout);
	for(int i=0;i<N;++i)
		scanf("%d%d", capacity+i, milk+i);
	for(int i=0;i<100;++i)
		pour(i%N, (i+1)%N); // Pour milk from one bucket to the next
	for(int i=0;i<N;++i)
		printf("%d\n", milk[i]);
	return 0;
}