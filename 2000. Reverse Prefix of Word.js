var reversePrefix =(w,c)=>{
    z= w.split('')
     x= z.splice(z.indexOf(c) + 1)
     s1= x.join('')
    s2= z.reverse().join('')
    return s2.concat(s1)
    
}
