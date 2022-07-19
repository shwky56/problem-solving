#include <iostream>
#include <cassert>
#include <vector>
using namespace std; 
int first(int arr[], int low, int high, int x){
    if(high >= low){
    int mid = low + (high- low)/2;
    if((mid == 0 or arr[mid - 1] <  x) and arr[mid] == x) return mid;
    else if(arr[mid] < x) return  first(arr, mid+1, high, x);
    else                  return first(arr, low, mid-1, x);
    }
    return -1;
}

int main(){
    int n;
    cin >> n;
    int  arr[n];
    for( int i=0; i < n;i++)    cin >> arr[i];
    int t, t1;
    cin >> t;
    while(t--){
        cin >> t1;
        cout << first(arr, 0, n-1, t1) << ' ';
    }
}

