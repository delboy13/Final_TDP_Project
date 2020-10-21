let records = [
    {ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    {ninumber: 'Zs05569B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
    {ninumber: 'po805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'},
    {ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    {ninumber: 'Zs05569B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
    {ninumber: 'po805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'}
];


 
var currentRecords = JSON.parse(sessionStorage.getItem("currentRecords"));
if(currentRecords == null){
    sessionStorage.setItem("currentRecords", JSON.stringify(records));

}


