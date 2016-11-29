/**
 * Created by chendanni on 16/11/4.
 */
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const darkBrown = '#965200';
export const lightBrown = '#C7801D';
export const brightBrown = '#D18721';
export const white = '#FFFFFF';
export const lightGray = '#9B9B9B';
export const whiteGray = '#EBEBEB';


export const newTheme = getMuiTheme({
    fontFamily:'\'Microsoft YaHei\'',
    // fontFamily: '\'Segoe UI\', \'HelveticaNeue-Light\', sans-serif'

    palette: {
        primary1Color: darkBrown,
        primary2Color: lightBrown,
        primary3Color: brightBrown,
        // accent1Color: pinkA200,
        // accent2Color: grey100,
        // accent3Color: grey500,
        // textColor: white,
        // canvasColor: darkBlack,
        // disabledColor: grey400
    },
    svgIcon: {
        color: white
    }
});

