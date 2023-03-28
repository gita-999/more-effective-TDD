
// 单位转换
// 美国⼈习惯使用很古怪的英制度量单位。英制度量单位的转换经常不是⼗进制的，比如说:

// 1 码(yard) = 3 英尺(foot)
// 1 英尺(foot) = 12 英寸(inch)
// 请你写一个程序，用于处理英寸、英尺、码之间的转换。例如：

// 1 英尺应该等于 12 英寸
// 1 码应该等于 36 英寸
// 1 英寸应该等于 1/36 码


// given 1, 码, 英尺 -》 3 英尺
// given 1,英尺, 英寸 -> 12 英尺
// given 1,码, 英寸 -> 36英寸
// given 1,英寸, 码 ->  1/36 英尺
// given 1,英尺, 码 ->  1/3 码
// given 0, 英尺, 英尺 -> 0 英尺 , 
// given 0.5, 英尺, 英寸 -> 6 英寸

const unitConversion = require('./unitConversion');

test(' given 1, 码, 英尺 -》 3 英尺', () => {
    expect(unitConversion(1, 'yard', 'foot')).toBe("3foot");
});