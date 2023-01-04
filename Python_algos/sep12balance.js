/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

function balance(arr) {
lsum=0;
rsum=0;
for (var i=0; i<(arr.length/2); i++) {
    i++;
    lsum+=arr[i];}
    console.log("lefthand"+lsum);
for(var j=arr.length/2; j>(arr.length-1); j--) {
    j--;
    rsum+=arr[j];
    console.log("righthand"+rsum);
}





}




const nums1 = [-2, 5, 7, 0,4, 3];
// const expected1 = 2;
balance(nums1);

// const nums2 = [9, 9];
// const expected2 = -1;