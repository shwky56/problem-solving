
#include <bits/stdc++.h>
using namespace std;
typedef pair<int, int> pi;
 
int max2d(vector<vector<int>>& points, int k) {
        deque<pair<int, int>> dq;
        dq.push_front({points[0][1] - points[0][0], points[0][0]});
        int res = INT_MIN;
        for(int i = 1; i < points.size(); i ++){
            while(!dq.empty() && points[i][0] - dq.front().second > k)
                dq.pop_front();
            if(!dq.empty())
                res = max(res, points[i][1] + points[i][0] + dq.front().first);
            while(!dq.empty() && dq.back().first <= points[i][1] - points[i][0])
                dq.pop_back();
            dq.push_back({points[i][1] - points[i][0], points[i][0]});
        }
        if(res == INT_MIN)return -1;
        return res;
    }   


    int main() {
    int q, w, tmp1, tmp2;
    cin >> q >> w;
        vector<vector<int>> points2 ;
        vector<int> tmb(2);
    for(int i=0;i<q;i++){
        cin >>tmp1>>  tmp2;
        points2.push_back({tmp1, tmp2});
    
    
    }
    
    cout << max2d(points2, w) << endl;


    return 0;
}