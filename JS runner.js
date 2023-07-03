const a = [1,5,7,4,9,12,20,18,14,3,6,8,2,100]

for (i = 0; i<a.length; i++)
{
    for (j = 0; j < a.length - 1; j++ )
    {
        if (a[j] > a[i])
        {
            temp = a[j]
            a[j] = a[i]
            a[i] = temp
        }
    }
}
console.log("Sorted Array")
for (x = 0; x < a.length; x++)
{
    console.log(a[x])
}