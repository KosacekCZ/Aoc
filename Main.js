let input = "1686\n" +
    "1337\n" +
    "1780\n" +
    "1305\n" +
    "1341\n" +
    "1120\n" +
    "1197\n" +
    "1786\n" +
    "1819\n" +
    "1414\n" +
    "1714\n" +
    "1232\n" +
    "1672\n" +
    "1617\n" +
    "817\n" +
    "1665\n" +
    "1603\n" +
    "1063\n" +
    "2007\n" +
    "1609\n" +
    "2008\n" +
    "1878\n" +
    "1660\n" +
    "1834\n" +
    "1901\n" +
    "323\n" +
    "1321\n" +
    "1380\n" +
    "1598\n" +
    "1938\n" +
    "1575\n" +
    "502\n" +
    "2010\n" +
    "1470\n" +
    "1902\n" +
    "1779\n" +
    "1081\n" +
    "1535\n" +
    "2002\n" +
    "1168\n" +
    "1702\n" +
    "1973\n" +
    "1866\n" +
    "1115\n" +
    "1774\n" +
    "1274\n" +
    "1845\n" +
    "1584\n" +
    "1574\n" +
    "1772\n" +
    "1735\n" +
    "1631\n" +
    "1628\n" +
    "1907\n" +
    "1466\n" +
    "756\n" +
    "1252\n" +
    "1627\n" +
    "1999\n" +
    "1826\n" +
    "1802\n" +
    "1921\n" +
    "1536\n" +
    "1549\n" +
    "1602\n" +
    "1421\n" +
    "1451\n" +
    "1709\n" +
    "1722\n" +
    "1951\n" +
    "1689\n" +
    "1106\n" +
    "1454\n" +
    "1384\n" +
    "1553\n" +
    "1604\n" +
    "1595\n" +
    "468\n" +
    "1082\n" +
    "1576\n" +
    "1958\n" +
    "1913\n" +
    "1075\n" +
    "1708\n" +
    "1775\n" +
    "701\n" +
    "1764\n" +
    "1439\n" +
    "1600\n" +
    "1922\n" +
    "1815\n" +
    "1839\n" +
    "1396\n" +
    "1974\n" +
    "1946\n" +
    "1965\n" +
    "1544\n" +
    "2003\n" +
    "1693\n" +
    "1594\n" +
    "1547\n" +
    "1054\n" +
    "1796\n" +
    "1945\n" +
    "1773\n" +
    "1483\n" +
    "1563\n" +
    "1721\n" +
    "1789\n" +
    "1427\n" +
    "1915\n" +
    "1069\n" +
    "1161\n" +
    "1551\n" +
    "1677\n" +
    "1692\n" +
    "2005\n" +
    "1770\n" +
    "1940\n" +
    "1346\n" +
    "1068\n" +
    "1588\n" +
    "1618\n" +
    "1468\n" +
    "1621\n" +
    "1749\n" +
    "1275\n" +
    "1315\n" +
    "1382\n" +
    "1847\n" +
    "1843\n" +
    "1751\n" +
    "1876\n" +
    "1667\n" +
    "1835\n" +
    "1848\n" +
    "1623\n" +
    "1810\n" +
    "1877\n" +
    "1438\n" +
    "968\n" +
    "1867\n" +
    "1763\n" +
    "1390\n" +
    "1967\n" +
    "1785\n" +
    "1530\n" +
    "1343\n" +
    "1423\n" +
    "415\n" +
    "1606\n" +
    "1928\n" +
    "1985\n" +
    "1781\n" +
    "1952\n" +
    "1459\n" +
    "1339\n" +
    "1644\n" +
    "1860\n" +
    "1646\n" +
    "1087\n" +
    "1880\n" +
    "1577\n" +
    "1759\n" +
    "1863\n" +
    "1766\n" +
    "1840\n" +
    "1613\n" +
    "1733\n" +
    "1808\n" +
    "1657\n" +
    "1169\n" +
    "1934\n" +
    "1729\n" +
    "1688\n" +
    "1138\n" +
    "1937\n" +
    "1112\n" +
    "1865\n" +
    "1853\n" +
    "1793\n" +
    "1292\n" +
    "1698\n" +
    "1624\n" +
    "1335\n" +
    "1264\n" +
    "1827\n" +
    "1874\n" +
    "1725\n" +
    "1378\n" +
    "1083\n" +
    "1173\n" +
    "1923\n" +
    "1842\n" +
    "1207\n" +
    "1614\n" +
    "1425\n" +
    "1794\n" +
    "1404\n" +
    "1862";
let splitDivide = input.split("\n");
for (let i = 0; i < splitDivide.length; i++) {
    for (let j = 0; j < splitDivide.length; j++) {
        for (let k = 0; k < splitDivide.length; k++) {
            let sum = parseInt(splitDivide[i]) + parseInt(splitDivide[j]) + parseInt(splitDivide[k]);
            if (sum == 2020) {
                console.log(splitDivide[i] + " + " + splitDivide[j]+ " + " + splitDivide[k] + " = " + sum);
                let sum2 = parseInt(splitDivide[i]) * parseInt(splitDivide[j]) * parseInt(splitDivide[k]);
                console.log(sum2);
            }
        }
    }
}
