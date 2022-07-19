#include <bits/stdc++.h>
using namespace std;

int get_majority_element(vector<int> &a, int n) {
  if(n == 1) return printf("1"), 1;
  int count = 1;
  sort(a.begin(), a.end());
  for(int i=1; i < n; i++){
    if(a[i] == a[i-1])
        count++;
    else count =1;
    if(count > n / 2)
      return printf("1"), 1;
  }
  return printf("0"), 0;
}
int main(){
  int n;
  scanf("%d", &n);
  vector<int> arr(n);
  for(int i=0; i < n;i++) scanf("%d", &arr[i]);
  get_majority_element(arr, n);
  
}