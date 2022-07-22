#include <bits/stdc++.h>
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
using namespace std;
void solve(){

}

bool cmp(string a , string b){
    if(a.size() < b.size())
        return true;
    else if(a.size() == b.size()){
        return a < b;
    }
    return false;
}

int main()
{
    fast_cin();
    int n;
    cin >> n;
    string str[n];
    for(int i = 0; i < n; i++){
        cin >> str[i];
    }
    sort(str,str+n);
    for(int i=0;i<n;i++)
        cout<<str[i]<<" ";
    cout<<endl;

    sort(str , str + n , cmp);
    for(int i=0;i<n;i++)
        cout<<str[i]<<" ";
    cout<<endl;
    return 0;
}