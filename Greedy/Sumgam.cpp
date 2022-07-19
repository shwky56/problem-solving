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


 

void solve(){
    long long a, b, n;
    cin >> a >> b;
    n = max(a, b);
    b = min(a, b);
    a = (n*(n+1)/2) - (b*(b+1)/2)+b;
    if(a % 2 == 0)cout << "Nasser";
    else cout << "Hoss";    
    }   
int main()
{    
        solve();
    
    return 0;
}