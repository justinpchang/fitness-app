export const pad = (n, d=2) => {
    return n.toLocaleString('en-US', {
        minimumIntegerDigits: d,
        useGrouping: false,
    });
};

export const minutesAndSeconds = (n) => ([
    pad(Math.floor(n / 60)),
    pad(Math.floor(n % 60)),
]);
