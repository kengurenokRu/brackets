module.exports = function check(str, bracketsConfig) 
{
  let braskets = new Map(bracketsConfig);
  let st = [];
  for (let i=0; i<str.length; i++) 
  { 
    let ch = st[st.length-1];
    if (braskets.get(ch) == str[i]) 
    {
      st.pop(); 
    } 
    else 
    { 
      st.push(str[i]); 
    }
  }
  if (st.length == 0) return true;
  else return false; 
}
