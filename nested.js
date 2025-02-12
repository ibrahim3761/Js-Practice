const college = {
    name: 'vnc',
    class: ['11','12'],
    events: ['science fair','bijoy dibosh','21st february'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

delete college.class

console.log(college)

console.log(college.unique.result.gpa)