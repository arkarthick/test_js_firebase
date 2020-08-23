// ----------test------
// var firebaseConfig = {
// 	apiKey: "AIzaSyDC5jTR7TFpB8zqLV9QFBQFJNaUw5tz07o",
// 	authDomain: "test-ddee8.firebaseapp.com",
// 	databaseURL: "https://test-ddee8.firebaseio.com",
// 	projectId: "test-ddee8",
// 	storageBucket: "test-ddee8.appspot.com",
// 	messagingSenderId: "96812955082",
// 	appId: "1:96812955082:web:18c6698181bf35cc1e8b33",
// 	measurementId: "G-95LB7H68E9"
// };


// --------------js-test-db

const firebaseConfig = {
	apiKey: "AIzaSyBQdaBdKXhnQwF0fYeSOf2UkWeWT_jZj0w",
	authDomain: "js-test-db.firebaseapp.com",
	databaseURL: "https://js-test-db.firebaseio.com",
	projectId: "js-test-db",
	storageBucket: "js-test-db.appspot.com",
	messagingSenderId: "392859062627",
	appId: "1:392859062627:web:f6ab44fe839dd2a7214356",
	measurementId: "G-YLMK5TJXBL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// refDB.on('value', snap => {
//   document.getElementById('list').innerText = snap.val()
//   // document.getElementById('list').innerText = JSON.stringify(snap.val().SNC.tel_num['290903'],null,1)
// });
var refDB = firebase.database().ref();
var refCustomers = refDB.child('Customers');
var refMetaData = refDB.child('MetaData');
var _lastBillNo, _vlans;
var customer = {};
var metadata = {};
function addCust(form) {

	refMetaData.child('misc').child('bill_no').on('value', snap => { _lastBillNo = snap.val() });
	refMetaData.child(form.location_code.value).child('vlans').on('value', snap => { _vlans = snap.val() });
	if (_lastBillNo !== null) {
		customer[form.telephone.value] = {
			telephone: form.area_code.value + '-' + form.telephone.value,
			exchange: form.location_code.value,
			old_telephone: form.old_telephone.value,
			// plan : form.plan.value,
			// status : form.status.value,
			// account_name : form.name.value,
			// conact_person: form.contact_person.value,
			// mobile:form.mobile.value,
			// home_mobile:form.home_mobile.value,
			// whatsapp : form.whatsapp_number.value,
			// email : form.mail.value,
			// installation_address : form.installation_address.value,
			// billing_address:form.billing_address.value,
			// area:form.area.value,
			// ont_provider:form.ont_from.value,
			// ont_make:form.ont_make.value,
			// mac_id : form.mac_id.value,
			// port : form.port_num.value,
			// vlan : form.vlan.value,
			// in_power : form.in_power.value,
			// power_altered_to : form.power_altered_to.value,
			// core_color : form.core_color.value
		};
		exMetaData = {
			[form.telephone.value]: {
				bill_no: ++_lastBillNo,
				vlan: 128
			},
			lastVlan: customer[form.telephone.value].vlan,
			vlans: 

		};


		// console.log(customer)
		// console.log(exMetaData)
		// refCustomers.update(customer)
		// refMetaData.child(_exCode).update(exMetaData)
		console.log(_lastBillNo);
		form.reset();
		return false;
	} else {
		//uncomment this code snippet while initialazing
		misc = {
			bill_no: 1,
			count: 1,
		};
		refMetaData.child('misc').update(misc)
	}

}
