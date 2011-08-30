require('../lib/coa').Cmd()
    .name('val')
    .title('Val test')
    .helpful()
    .opt()
        .name('bla').title('Bla')
        .short('b').long('bla')
        .val(function(v) { return { value: v } })
        .act(function(opts) {
            console.log(opts.bla);
        })
        .end()
    .parse(['--bla=blabla']);