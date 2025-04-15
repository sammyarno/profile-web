const cx = (...classes: (string | undefined | null | false | 0)[]) => classes.filter(Boolean).join(' ');

export default cx;
