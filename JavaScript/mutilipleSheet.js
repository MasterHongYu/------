for (i=1;i<10;i++) {
    sheet = ''
    for (j=1;j<10;j++){
        
        // 三元運算子
        let space = (i*j < 10) ? "   " : '  ';

        sheet +=(`${i} X ${j} = ${i*j}${space}`);
    }
    console.log(sheet)
}