
//put your mapbox api token here
//get an api token from: https://www.mapbox.com/help/create-api-access-token/
L.mapbox.accessToken = 'mapbox_api_token_goes_here';


// MIT-licensed code by Benjamin Becquet
// https://github.com/bbecquet/Leaflet.PolylineDecorator
L.RotatedMarker = L.Marker.extend({
options: { angle: 0 },
_setPos: function(pos) {
    L.Marker.prototype._setPos.call(this, pos);
    if (L.DomUtil.TRANSFORM) {
    // use the CSS transform rule if available
    this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
    } else if (L.Browser.ie) {
    // fallback for IE6, IE7, IE8
    var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
    costheta = Math.cos(rad),
    sintheta = Math.sin(rad);
    this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=' +
        costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
    }
}
});
L.rotatedMarker = function(pos, options) {
    return new L.RotatedMarker(pos, options);
};

