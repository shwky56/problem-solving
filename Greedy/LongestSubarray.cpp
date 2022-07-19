#include <bits/stdc++.h>
using namespace std;
 

int solve(int arr[],
                    int n,
                    int k)
{
 

    unordered_map<int, int> um;
    int sum = 0, maxLen = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == k)
            maxLen = i + 1;
        if (um.find(sum) == um.end())
            um[sum] = i;
        if (um.find(sum - k) != um.end()) {
 
            if (maxLen < (i - um[sum - k]))
                maxLen = i - um[sum - k];
        }
    }

    return maxLen;
}
 

int main()
{
    long long  n, k, mi = 1e9+1;
    long long ss =0;
    cin >> n >> k;
    long long  arr[n];
    for(int i=0;i<n;i++){cin >> arr[i];ss += arr[i];mi = min(mi, arr[i]);}
    if(ss < k or mi > k)return cout << 0, 0;
    solve(arr, n, k);
    return 0;
}