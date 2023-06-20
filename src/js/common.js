// This file define common constants
// *
// -------------------- User Credential -------------------- //
// Shared (in User Details)
export const UID_KEY = "uid";
export const NAME_KEY = "name";
export const USERNAME_KEY = "username";
export const IMAGE_KEY = "img";
export const PHONE_KEY = "phone";
export const EMAIL_KEY = "email";
export const LAST_LOGIN_KEY = "lastLogin";
export const LAST_UPDATE_KEY = "updated";

// ONLY for core data. Not accessible by anyone, except admin
export const LANGUAGE_KEY = "lang";
export const EMAIL_VERIFIED_KEY = "emailVerified";
export const USER_NUMBER_KEY = "userNo";
export const PROVIDER_ID_KEY = "providerId"; // google.com, password, ...
export const CREATE_AT_KEY = "createdAt";
// export const TOKEN_KEY = "token"; // Access Token for security
export const ACCOUNT_STATUS_KEY = "accStatus";
    export const INACTIVE_KEY = "inactive";
    export const ACTIVE_KEY = "active";
    export const SUSPENDED_KEY = "suspended";
    export const VIP1_KEY = "vip1";
    export const VIP2_KEY = "vip2";
    export const VIP3_KEY = "vip3";

// -------------------- User Details -------------------- //
export const AGE_KEY = "age";
export const GENDER_KEY = "gender";
    export const MALE_KEY = "m";
    export const FEMALE_KEY = "f";
    export const GENDER_ANY_KEY = "any";
export const ADDRESS_KEY = "address";
export const QUALIFICATION_KEY="qua";
export const YEARS_EXPERIENCE_KEY="yrExp";
export const INTRO_KEY = "intro"
export const APPROACH_KEY="approach";
export const AREA_ARR_KEY = "areaArr";
export const SUBJECT_ARR_KEY = "subArr"; // Refer to myConst.js
export const MODE_ARR_KEY = "modeArr";
    export const MODE_HOME = "modeHome";
    export const MODE_ONLINE = "modeOnline"
    export const MODE_CENTER = "modeCenter"
export const TIME_SLOT_ARR_KEY = "timeArr";
    export const TIME_SLOT_MON_8AM_KEY  = "mon8am";
    export const TIME_SLOT_MON_12PM_KEY = "mon12pm";
    export const TIME_SLOT_MON_3PM_KEY  = "mon3pm";
    export const TIME_SLOT_MON_6PM_KEY  = "mon6pm";
    export const TIME_SLOT_TUE_8AM_KEY  = "tue8am";
    export const TIME_SLOT_TUE_12PM_KEY = "tue12pm";
    export const TIME_SLOT_TUE_3PM_KEY  = "tue3pm";
    export const TIME_SLOT_TUE_6PM_KEY  = "tue6pm";
    export const TIME_SLOT_WED_8AM_KEY  = "wed8am";
    export const TIME_SLOT_WED_12PM_KEY = "wed12pm";
    export const TIME_SLOT_WED_3PM_KEY  = "wed3pm";
    export const TIME_SLOT_WED_6PM_KEY  = "wed6pm";
    export const TIME_SLOT_THU_8AM_KEY  = "thu8am";
    export const TIME_SLOT_THU_12PM_KEY = "thu12pm";
    export const TIME_SLOT_THU_3PM_KEY  = "thu3pm";
    export const TIME_SLOT_THU_6PM_KEY  = "thu6pm";
    export const TIME_SLOT_FRI_8AM_KEY  = "fri8am";
    export const TIME_SLOT_FRI_12PM_KEY = "fri12pm";
    export const TIME_SLOT_FRI_3PM_KEY  = "fri3pm";
    export const TIME_SLOT_FRI_6PM_KEY  = "fri6pm";
    export const TIME_SLOT_SAT_8AM_KEY  = "sat8am";
    export const TIME_SLOT_SAT_12PM_KEY = "sat12pm";
    export const TIME_SLOT_SAT_3PM_KEY  = "sat3pm";
    export const TIME_SLOT_SAT_6PM_KEY  = "sat6pm";
    export const TIME_SLOT_SUN_8AM_KEY  = "sun8am";
    export const TIME_SLOT_SUN_12PM_KEY = "sun12pm";
    export const TIME_SLOT_SUN_3PM_KEY  = "sun3pm";
    export const TIME_SLOT_SUN_6PM_KEY  = "sun6pm";

export const FEE_KEY = "fee";
export const CURRENCY_KEY = "currency"; // MYR, ...
    export const CUR_USD = "USD";
    export const CUR_SGD = "SGD";
    export const CUR_MYR = "MYR";
    export const CUR_IDR = "IDR";
    export const CUR_THB = "THB";
    export const CUR_VND = "VND";

export const FEE_TYPE_KEY = "feeType";
    // Fees Type Value
    export const FEE_TYPE_MONTH_KEY = "month";
    export const FEE_TYPE_HOUR_KEY = "hourly";
    export const FEE_TYPE_PACKAGE_KEY = "package";

export const RATE_KEY = "rate";
export const RATE_TIMES_KEY = "rateTimes";
export const RATE_FINAL_KEY = "rateFinal";

export const TUTOR_TYPE_KEY = "tutorType";
    export const TUTOR_TYPE_PART = "part";
    export const TUTOR_TYPE_FULL = "full";
    export const TUTOR_TYPE_MOE = "moe"; // Current MOE School Teacher
    export const TUTOR_TYPE_EXMOE = "exmoe"; // Ex/Retired MOE School Teacher
    export const TUTOR_TYPE_NON_MOE = "nonmoe"; // Current Non MOE School Teacher
    export const TUTOR_TYPE_NON_EXMOE = "nonexmoe"; // Ex/Retired Non MOE School Teacher

// -------------------- User Wallet -------------------- //
export const WALLET_ID = "id";

// -------------------- Shared Key -------------------- //
export const ID_KEY = "id";

export const DAY_OF_WEEK_KEY = "dayOfWeek";
    export const DAY_OF_WEEK_MON = "mon";
    export const DAY_OF_WEEK_TUE = "tue";
    export const DAY_OF_WEEK_WED = "wed";
    export const DAY_OF_WEEK_THU = "thu";
    export const DAY_OF_WEEK_FRI = "fri";
    export const DAY_OF_WEEK_SAT = "sat";
    export const DAY_OF_WEEK_SUN = "sun";

export const TIME_SLOT_KEY = "timeSlot";
    export const TIME_SLOT_8AM = "t8am";
    export const TIME_SLOT_12PM = "t12pm";
    export const TIME_SLOT_3PM = "t3am";
    export const TIME_SLOT_6PM = "t6pm";

// -------------------- Request Key -------------------- //
// /request/v1/admin
export const REQ_ADMIN_ID = 'id';
export const REQ_ADMIN_NAME = 'name';
export const REQ_ADMIN_PHONE = 'phone';
export const REQ_ADMIN_EMAIL = 'email';
export const REQ_ADMIN_PERSON = 'person';
    export const REQ_ADMIN_PERSON_PARENT = 'parent';
    export const REQ_ADMIN_PERSON_STUDENT = 'student';
export const REQ_ADMIN_STU_GENDER = 'stuGender';
export const REQ_ADMIN_SCHOOL = 'school';
export const REQ_ADMIN_SUBJECT = 'subject';
// export const REQ_ADMIN_MODE = 'mode';
export const REQ_ADMIN_PLACE = 'place';
export const REQ_ADMIN_BUDGET = 'budget';
export const REQ_ADMIN_DURATION = 'duration';
export const REQ_ADMIN_LESS_PER_WEEK = 'lessPerWeek';
export const REQ_ADMIN_DAY_OF_WEEK = 'dayOfWeek';
export const REQ_ADMIN_TIME = 'timeSlot';
export const REQ_ADMIN_TUTOR_GENDER = 'tutorGender';
export const REQ_ADMIN_MESSAGE = 'message';
export const REQ_ADMIN_SURVEY_01 = 'sur01';
// surWebSearch surFb surInsta surRecommended surAds surAdsGoogle surAdsFb surTwitter surLinkedIn surWhatsapp surTelegram
export const REQ_ADMIN_URL = 'url';

export const REQ_ADMIN_JOB_ID = 'jobId';
export const REQ_ADMIN_JOB_PUBLIC_ID = 'jobPublicId';
export const REQ_ADMIN_JOB_REF_NO = 'jobRef';
export const REQ_ADMIN_JOB_STATUS = 'jobStatus';

export const REQ_ADMIN_ONLINE = 'online';
export const REQ_ADMIN_SUB_ARR = 'subArr';
export const REQ_ADMIN_AREA = 'area';
export const REQ_ADMIN_STATE = 'state';
export const REQ_ADMIN_REMARK = 'remark';
export const REQ_ADMIN_REQ_STATUS = 'reqStatus';
    export const REQ_ADMIN_REQ_STATUS_NEW= 'new';
    export const REQ_ADMIN_REQ_STATUS_NO_RESPONSE= 'noRes';
    export const REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE= 'expensive';
    export const REQ_ADMIN_REQ_STATUS_OTHER_OFFER= 'otherOffer';
    export const REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS ='progress';
    export const REQ_ADMIN_REQ_STATUS_JOB_SENT ='sent';
    export const REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE ='jobNoRes';
    export const REQ_ADMIN_REQ_STATUS_JOB_REJECT ='rejectAllTutors';
    export const REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL ='stopAfterTrial';
    export const REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR ='noTutor';
    export const REQ_ADMIN_REQ_STATUS_JOB_TIME ='timeXMatch';
    export const REQ_ADMIN_REQ_STATUS_SUCCESS= 'success';
export const REQ_ADMIN_DATE_SEND = 'dateSend';
export const REQ_ADMIN_DATE_READ = 'dateRead';
export const REQ_ADMIN_OWNER = 'owner';
export const REQ_ADMIN_STATUS = 'status';

export const REQ_ADMIN_EV_ID = "evId";
export const REQ_ADMIN_EV_ERROR_CODE = "evErrorCode";
export const REQ_ADMIN_EV_DATEX = "evDateX";
export const REQ_ADMIN_EV_ACT = "evAct";
export const REQ_ADMIN_EV_ACT_STATUS = "evActStatus";
export const REQ_ADMIN_REFID = "refId"; // RefId is needed to close any request

export const REQ_ADMIN_UTM_SOURCE = "utm_source";
export const REQ_ADMIN_UTM_MEDIUM = "utm_medium";
export const REQ_ADMIN_UTM_CAMPAIGN = "utm_campaign";
export const REQ_ADMIN_UTM_TERM = "utm_term";
export const REQ_ADMIN_UTM_CONTENT = "utm_content";

// -------------------- Job Full Key -------------------- //
// job/v1/job
// job/v1/public (This is the copy display to public protect the client & applicant info. Indicated by [JOB/PUBLIC])

export const JOB_ID = "id";
export const JOB_PUBLIC_ID = "jobPublicId";
export const JOB_REQ_ID = "reqId";
export const JOB_REF_NO = "jobRef"; // [JOB/PUBLIC]

export const JOB_NAME = "name";
export const JOB_CLIENT_ID = "clientId";
export const JOB_EMAIL = "email";
export const JOB_PHONE = "phone";
export const JOB_DURATION = 'duration'; // [JOB/PUBLIC]
export const JOB_LESS_PER_WEEK = 'lessPerWeek'; // [JOB/PUBLIC]
export const JOB_DAY_OF_WEEK = 'dayOfWeek'; // [JOB/PUBLIC]
export const JOB_TIME = 'timeSlot'; // [JOB/PUBLIC]
export const JOB_DETAIL = 'detail'; // [JOB/PUBLIC]
export const JOB_ONLINE = 'online'; // [JOB/PUBLIC]
export const JOB_PLACE = "place"; // [JOB/PUBLIC]
export const JOB_SUB_ARR = 'subArr'; // [JOB/PUBLIC]
export const JOB_AREA = 'area'; // [JOB/PUBLIC]
export const JOB_STATE = 'state'; // [JOB/PUBLIC]

export const JOB_COMMISSION_POLICY = "comPol"; // [JOB/PUBLIC]
    export const JOB_COMMISSION_POLICY_50PC = "50pc";
    export const JOB_COMMISSION_POLICY_40PC = "40pc";
    export const JOB_COMMISSION_POLICY_30PC = "30pc";
    export const JOB_COMMISSION_POLICY_25PC = "25pc";
    export const JOB_COMMISSION_POLICY_20PC = "20pc";
    export const JOB_COMMISSION_POLICY_10PC = "10pc";
    export const JOB_COMMISSION_POLICY_NOCOM = "noCom";
    export const JOB_COMMISSION_POLICY_PLAN25 = "plan25";
    export const JOB_COMMISSION_POLICY_PLAN20 = "plan20";
    export const JOB_COMMISSION_POLICY_PROGRESSIVE_INCREMENT_PLAN = "proIncPlan";

export const JOB_FEE = "fee"; // [JOB/PUBLIC]
export const JOB_FEE_TYPE = "feeType"; // [JOB/PUBLIC]
export const JOB_PARTNER = "partner"; // [JOB/PUBLIC]
export const JOB_PARTNER_NAME = "partnerName"; // [JOB/PUBLIC]

export const JOB_JOB_STATUS = "jobStatus"; // [JOB/PUBLIC]
// Equalvalent to 'progress', 'jobNoRes', 'rejectAllTutors', 'stopAfterTrial', 'noTutor', 'timeXMatch', 'success';
export const JOB_DATE_CREATE = "dateCreated"; // [JOB/PUBLIC]
export const JOB_DATE_CLOSE = "dateClosed"; // [JOB/PUBLIC]
export const JOB_DATE_QUERY = "dateQuery"; // [JOB/PUBLIC]
export const JOB_OWNER = 'owner';
export const JOB_STATUS = 'status'; // [JOB/PUBLIC]
export const JOB_REFID = "refId";

export const JOB_APPLY_ID_ARR = "applyIdArr";
export const JOB_APPLICANT_ARR = "applicantArr";
// Arr apllications Obj.
// {
//   id: Application Id
//   name: Applicant name
//   tid: Applicant Id
//   status: Application status
// }

// job/v1/public
// export const JOB_PUBLIC_ID = "id";
export const JOB_PUBLIC_JOB_ID= "jobId";
export const JOB_PUBLIC_APPLICANT_NUM= "applicantNum";


// -------------------- Job Application Key -------------------- //
// job/v1/apply
export const JOB_APPLY_ID = "id";
export const JOB_APPLY_JOB_ID = "jobId";
export const JOB_APPLY_JOB_PUBLIC = "jobPublicId";
export const JOB_APPLY_DATE_CREATE = "dateCreate";
export const JOB_APPLY_STATUS = "status";
  export const JOB_APPLY_STATUS_NEW = "new";
  export const JOB_APPLY_STATUS_SHORTLIST_TOP = "shortlistTop";
  export const JOB_APPLY_STATUS_SHORTLIST = "shortlist";
  export const JOB_APPLY_STATUS_SELECTED = "selected";
  export const JOB_APPLY_STATUS_MATCHED = "matched";
export const JOB_APPLY_NAME = "clientId";
export const JOB_APPLY_TID = "name"; // Tutor Name
export const JOB_APPLY_SUB_ARR = "subArr"; // Subject to be taught
export const JOB_APPLY_FEE = "fee"; // Tutor proposed Fee
export const JOB_APPLY_FEE_TYPE = "feeType";
export const JOB_APPLY_CURRENCY = "currency";
export const JOB_APPLY_MESSAGE = "message";
export const JOB_APPLY_PAYMENT_METHOD = "payMethod";
  export const JOB_APPLY_PAYMENT_CREDIT = "date";
  export const JOB_APPLY_PAYMENT_DEPOSIT = "owner";
  export const JOB_APPLY_PAYMENT_PAY_LATER = "payLater";
export const JOB_APPLY_LOG = "log";
  export const JOB_APPLY_LOG_DATE = "date";
  export const JOB_APPLY_LOG_OWNER = "owner";
  export const JOB_APPLY_LOG_DESC = "desc";

// -------------------- Event Key -------------------- //
// Events (admin/v1/ev_noti)

export const EV_ID = "id";
export const EV_EVENT = "event";
export const EV_OWNER = "owner";
export const EV_DESC = "desc";
export const EV_STATUS = "status";
export const EV_ERRORCODE = "errorCode";
export const EV_DATA = "data";
export const EV_DATE_CREATE = "dateCreate";

export const EV_SENDER = "s";
export const EV_RECEIVER = "r";
export const EV_DATE_UPDATE = "dateU";
export const EV_REFID = "refId";
export const EV_SEEN = "seen";

export const EV_ACT = "act";
export const EV_ACT_TARGET = "actTarget";
export const EV_ACT_DATE = "actDate";
export const EV_ACT_DESC = "actDesc";
export const EV_ACT_STATUS = "actStatus";
    export const EV_ACT_STATUS_NEW = "new";
    export const EV_ACT_STATUS_DONE = "done";
export const EV_ACT_DATE_UPDATE = "actDateU";


// Subject specific details ()
export const CATEGORY_KEY = "category";
export const CATEGORY_ID_KEY = "categoryId";
export const SUBJECT_KEY = "subject";
export const SUBJECT_ID_KEY = "subjectId";
export const DATE_CREATED_KEY = "dateCreated";
export const FEES_KEY = "fees";
export const FEES_PER_MONTH_KEY = "feesPerMonth"; // NEW FEATURE 2.0
export const FEES_TYPE_KEY = "feesType";
    // Fees Type Value
    export const FEES_TYPE_PER_MONTH_KEY = "Per Month";
    export const FEES_TYPE_PER_HOUR_KEY = "Per Hour";
export const DURATION_KEY = "duration";
export const CLASSPERWEEK_KEY = "classPerWeek";
export const AVAILABLE_KEY = "availableOn";
export const PREFERED_START_TIMESLOT_KEY = "preferedStartTimeSlot";
export const PREFERED_END_TIMESLOT_KEY = "preferedEndTimeSlot";
//    export const ONLINE_KEY = "online";  // Use the one in job
export const NEGOTIABLE_KEY = "negotiable";
export const SUBJECT_DESCRIPTION_KEY = "subjectDescription";
export const PHOTO_LINK1_KEY = "photoLink1";
export const PHOTO_LINK2_KEY = "photoLink2";
export const PHOTO_LINK3_KEY = "photoLink3";
export const COMMISSION_PERCENT_KEY = "commissionPercent";
export const COMMISSION_KEY = "commission";
export const REBARE_PERCENT_KEY = "rebatePercent";
export const REBATE_KEY = "rebate";
export const EARNING_KEY = "earning";

// Tutor details (10)
export const CHECK_HOMETUTOR_KEY = "isHomeTutor";
export const CHECK_PRIVATETUTOR_KEY = "isPrivateTutor";
export const CHECK_GROUPTUTOR_KEY = "isGroupTutor";
export const CHECK_ONLINETUTOR_KEY = "isOnlineTutor";
// NEW FEATURE 2.0 Start
export const CHECK_HOME_TUTOR_TO_STUDENT_KEY = "modeHomeTutorToStudent";
export const CHECK_HOME_STUDENT_TO_TUTOR_KEY = "modeHomeStudentToTutor";
export const CHECK_GROUP_KEY = "modeGroup";
export const CHECK_ONLINE_KEY = "modeOnline";
export const CHECK_ONLINE_GROUP_KEY = "modeOnlineGroup";

export const CHECK_TEACHING_LANGUAGE_ENGLISH_KEY = "lanEng";
export const CHECK_TEACHING_LANGUAGE_BM_KEY = "lanBm";
export const CHECK_TEACHING_LANGUAGE_BC_KEY = "lanBc";
export const CHECK_TEACHING_LANGUAGE_BT_KEY = "lanBt";
export const CHECK_TEACHING_LANGUAGE_OTHER_KEY = "lanOther";
    export const LAN_ENGLISH = "lanEng";
    export const LAN_BM = "lanBm"
    export const LAN_BC = "lanBc"
    export const LAN_BT = "lanBt"
    export const LAN_OTHER = "lanOther"
// NEW FEATURE 2.0 End
export const PREFERED_SUBJECT_LIST_KEY = "preferedSubjectList";

export const STATUS_KEY = "status";
// Used in Model.TutorInfo
export const RECENT_DATE_KEY = "recentDate";
// Used in ChatItem Model
export const TAG_KEY = "tag";
    export const TAG_CLIENT_KEY = "client";
    export const TAG_TUTOR_KEY = "tutor";
    export const TAG_AGENT_KEY = "agent";
    export const TAG_ADMIN_KEY = "admin";

// Subject General Status
// Course Specific details + others
export const COURSE_ID_KEY = "courseId";
export const COURSE_DATE_CREATED_KEY = "courseDateCreated";
export const COURSE_DATE_UPDATED_KEY = "courseDateUpdated";
export const COURSE_DATE_FIRST_CLASS_KEY = "courseDateFirstClass";
export const COURSE_DATE_NEXT_CLASS_KEY = "courseDateNextClass";
export const COURSE_DATE_LAST_CLASS_KEY = "courseDateLastClass";
export const CLIENT_NOTE_KEY = "clientNote";
export const TUTOR_NOTE_KEY = "tutorNote";
export const COURSE_STATUS_KEY = "statusCourse";
    export const STATUS_NEW="new";
    export const STATUS_ACCEPTED="accepted";
    export const STATUS_REJEPTED="rejected";
    export const STATUS_PAID="paid";
    export const STATUS_TERMINATED = "terminated";
    export const STATUS_SUSPENDED = "suspended";
    export const STATUS_COMPLETED = "completed";
export const STATUS_PAYMENT = "statusPayment";  // Paid/PayNow
//        export const STATUS_PAYMENT_PAID = "Paid";
//        export const STATUS_PAYMENT_PAYNOW = "Pay Now";
    export const STATUS_PAYMENT_WAITFORPAYMENT_KEY = "WaitForPayment";
    export const STATUS_PAYMENT_WAITFORACK_KEY = "WaitForAck";
    export const STATUS_PAYMENT_PAID_KEY = "Paid";
    export const STATUS_PAYMENT_WAITFORTUTORPAYMENTKEY = "WaitForTutorPayment";
    export const STATUS_PAYMENT_WAITFORPAYMENTTOTUTOR_KEY = "WaitForPaymentToTutor";
    export const STATUS_PAYMENT_CLIENTXPAY_KEY = "ClientXPay";
    export const STATUS_PAYMENT_TUTORXPAY_KEY = "TutorXPay";
    export const STATUS_PAYMENT_CLOSED_KEY = "Closed";
    export const STATUS_PAYMENT_WARNING1_KEY = "Warning1";
    export const STATUS_PAYMENT_WARNING2_KEY = "Warning2";
export const STATUS_OVERALL = "statusOverall";  // [Boolean]Active/Passive
export const STATUS_REVIEW = "statusReview";  // [Boolean]Active/Passive


// Subject Overall Status
export const COURSE_TUTOR_COMMENT_KEY = "courseTutorComment";
export const COURSE_TUTOR_COMMENT_LIST_KEY = "courseTutorCommentList";
export const COURSE_DATE_SESSION_LIST_KEY = "courseDateSessionList";
export const COURSE_PAYMENT_TOTAL_LIST_KEY = "coursePaymentTotalList";// List of payment amount
export const COURSE_PAYMENT_DATE_LIST_KEY = "coursePaymentDateList";// List of payment date
export const COURSE_PAYMENT_TYPE_LIST_KEY = "coursePaymentTypeList";  // List of payment type (Cash/CC)
export const COURSE_PAYMENT_STATUS_LIST_KEY = "coursePaymentStatusList"; //List of payment status (T->paid;F->paynow)

// Tutor Personal Details (Used in RequestSendActivity and OnGoingSessionActivity)
export const TUTOR_ID_KEY = "id_tutor";
export const TUTOR_NAME_KEY = "name_tutor";
export const TUTOR_EMAIL_KEY = "email_tutor";
export const TUTOR_PHONE_KEY = "phone_tutor";
export const TUTOR_AGE_KEY = "age_tutor";
export const TUTOR_GENDER_KEY = "gender_tutor";
export const TUTOR_NRIC_KEY = "nric_tutor";
export const TUTOR_ADDRESS_KEY = "address_tutor";
export const TUTOR_IMAGE_KEY = "imgUrl_tutor";
export const TUTOR_RATING_KEY = "rating_tutor";
export const TUTOR_RATING_TIMES_KEY = "ratingTimes_tutor";
export const TUTOR_PROFILE_STATUS_KEY = "profileStatus_tutor";

// Client Personal Details (Used in RequestSendActivity and OnGoingSessionActivity)
export const CLIENT_ID_KEY = "id_client";
export const CLIENT_NAME_KEY = "name_client";
export const CLIENT_EMAIL_KEY = "email_client";
export const CLIENT_PHONE_KEY = "phone_client";
export const CLIENT_AGE_KEY = "age_client";
//    export const CLIENT_GENDER_KEY = "gende_client";
export const CLIENT_NRIC_KEY = "nric_client";
export const CLIENT_ADDRESS_KEY = "address_client";
export const CLIENT_IMAGE_KEY = "imgUrl_client";

// Used in payment activity
// Payment detail
// Note: adminDatePaymentToTutor                -> Date when payment is made to tutor
// Note: clientDatePayment                      -> Date when payment is made by Client
// Note: clientDatePaymentDue                   -> Payment due date for client to make payment (FirstClassDate + 21D)
// Note: clientDateTermination                  -> Date when a course is terminated due to no payment made by Client (FirstClassDate + 28D)
// Note: clientDateNextPaymentDue               -> Payment due date for client of next cycle
// Note: tutorDatePaymentToAdmin                -> Date when a payment is made by Tutor to GoLearn
// Note: tutorDatePaymentToAdminDue             -> Payment due date for tutor to make payment to GoLearn(clientDatePayment + 7D)
// Note: tutorDatePaymentToAdminTermination     -> Date when a course is terminated due to no payment made by Tutor (clientDateTermination + 7D)
// Note: adminPaymentToTutorDone                -> Payment to tutor Done?
// Note: clientPaymentDone                      -> Payment by Client Done? If cash, this must be indicate by tutor. If CC, automatics
// Note: tutorPaymentToAdminDone                -> Payment of commission by Tutor if cash is selected
export const PAYMENT_ID_KEY = "paymentId";
export const COURSE_DATE_TERMINATION_KEY = "courseDateTermination";
export const ADMIN_DATE_PAYMENT_TO_TUTOR_KEY = "adminDatePaymentToTutor";
export const CLIENT_DATE_NEXT_PAYMENT_DUE_KEY = "clientDateNextPaymentDue";
export const CLIENT_DATE_PAYMENT_KEY = "clientDatePayment";
export const CLIENT_DATE_PAYMENT_DUE_KEY = "clientDatePaymentDue";
export const CLIENT_DATE_TERMINATION_KEY = "clientDateTermination";
export const TUTOR_DATE_PAYMENT_TO_ADMIN_KEY = "tutorDatePaymentToAdmin";
export const TUTOR_DATE_PAYMENT_TO_ADMIN_DUE_KEY = "tutorDatePaymentToAdminDue";
export const TUTOR_DATE_PAYMENT_TO_ADMIN_TERMINATION_KEY = "tutorDatePaymentToAdminTermination";
export const ADMIN_PAYMENT_TO_TUTOR_DONE_KEY = "adminPaymentToTutorDone";
export const CLIENT_PAYMENT_DONE_KEY = "clientPaymentDone";
export const TUTOR_PAYMENT_TO_ADMIN_DONE_KEY = "tutorPaymentToAdminDone";

// Used in FCM
export const CHANNEL_ID_KEY = "channelId";
export const CHANNEL_NAME_KEY = "channelName";
export const CHANNEL_MESSAGE_KEY = "channelMessage";

// Type used in Notification
export const REQUEST_KEY = "request";
export const UPDATE_KEY = "update";
export const ACCEPT_KEY = "accept";
export const REJECT_KEY = "reject";
export const TERMINATE_KEY = "terminate";
export const PAYMENT_KEY = "payment";
export const MESSAGE_KEY = "message";
export const READ_KEY = "read";
export const NEW_MESSAGE_KEY = "newMessage"; // When a message is sent

// Used in Notification
export const STATUS_NOTIFICATION_KEY = "statusNotification";

// KEY used in chat activity
export const SENDER_KEY = "sender";
export const RECEIVER_KEY = "receiver";
export const DATE_KEY = "date";
export const TIME_KEY = "time";
//    private static final String MESSAGE_KEY = "message"; DUPLICATED
export const SEEN_KEY = "seen";

// Used in AgentJobAddActivity
export const JOBID_KEY = "jobId";
//    export const SUBJECT_KEY = "subject";
//    export const CATEGORY_KEY = "CATEGORY";
export const CATEGORY_SUBJECT_KEY = "categorySubject";
export const AREA_KEY = "area";
export const AREA_ID_KEY = "areaId";
export const STATE_KEY = "state";
export const STATE_ID_KEY = "stateId";
export const CLIENT_LOCATION_DETAIL_KEY = "clientLocationDetail";
export const JOB_DETAIL_KEY = "jobDetail";
export const OTHER_DETAIL_KEY = "otherDetail";
export const COMMISION_POLICY_KEY = "commisionPolicy";
export const ONLINE_KEY = "online";
// export const FEE_KEY = "fee";
export const AGENT_ID_KEY = "agentId";
export const AGENT_NAME_KEY = "agentName";
export const NUMBER_APPLIED_KEY = "numberApplied";
//    export const DATE_CREATED_KEY = "dateCreated";
export const DATE_CLOSED_KEY = "dateClosed";
export const DATE_DELETED_KEY = "dateDeleted";
export const JOB_STATUS_KEY = "jobStatus";
export const JOB_MESSAGE_KEY = "jobMessage";
    // Value of JOB_STATUS_KEY
    // Agent / Parents - What we see
    export const JOB_STATUS_OPEN_KEY = "open"; // Means new
    export const JOB_STATUS_CLOSED_KEY = "closed"; // Depreciated, Change to success and failed.
    export const JOB_STATUS_SUCCESS_KEY = "success";
    export const JOB_STATUS_FAILED_KEY = "failed";
    export const JOB_STATUS_FULL_KEY = "full";
    // Tutor/Applicant - What they see
    export const JOB_STATUS_NEW_KEY = "new";
    export const JOB_STATUS_ACCCEPTED_KEY = "accepted";
    export const JOB_STATUS_REJECTED_KEY = "rejected";

// NEW FEATURE 2.0:
// Time Slot Specific
export const TIME_SLOT_NAME_KEY = "timeSlotName";
export const TIME_SLOT_DESCRIPTION_KEY = "timeSlotDescription";
export const TIME_SLOT_STATUS_KEY = "timeSlotStatus";
// Commission Policy
export const COMMISSION_POLICY_KEY = "comPol";
    export const COMMISSION_POLICY_NO_COMMISSION_KEY = "noCom";
    export const COMMISSION_POLICY_10_KEY = "10pc";
    export const COMMISSION_POLICY_20_KEY = "20pc";
    export const COMMISSION_POLICY_30_KEY = "30pc";
    export const COMMISSION_POLICY_40_KEY = "40pc";
    export const COMMISSION_POLICY_50_KEY = "50pc";
    export const COMMISSION_POLICY_2622181614_KEY = "2622181614pc";
    export const COMMISSION_POLICY_PROGRESSIVE_INCREMENT_PLAN_KEY = "proIncPlan";

// Tutor Request Form Specific (used in JobRequests modal)
export const CLIENT_TYPE_KEY = "cType";
export const CLIENT_STUDENT_GENDER_KEY = "cStuGen";
export const CLIENT_SCHOOL_KEY = "cSchool";
export const CLIENT_BUDGET_KEY = "cBudget";
export const CLIENT_LENGTH_OF_COMMITMENT_KEY = "cLOC";
export const CLIENT_START_DATE_KEY = "cStartDate";
export const CLIENT_PREFERRED_DAY_OF_WEEK_KEY = "cPDOW";
export const CLIENT_PREFERRED_TIME_SLOT_KEY = "cPSlot";
export const CLIENT_PREFERRED_TUTOR_GENDER_KEY = "cPTGen";
export const CLIENT_PREFERRED_TUTOR_RACE_KEY = "cStartDate";
export const CLIENT_NOTES_KEY = "cNote";
export const CLIENT_SURVEY_1_KEY = "cSurvey1";
export const CLIENT_SURVEY_2_KEY = "cSurvey2";
export const CLIENT_SURVEY_3_KEY = "cSurvey3";

// Admin Commission Policy (per month)
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_1_KEY = "aMonth1";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_2_KEY = "aMonth2";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_3_KEY = "aMonth3";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_4_KEY = "aMonth4";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_5_KEY = "aMonth5";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_6_KEY = "aMonth6";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_7_KEY = "aMonth7";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_8_KEY = "aMonth8";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_9_KEY = "aMonth9";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_10_KEY = "aMonth10";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_11_KEY = "aMonth11";
export const ADMIN_PARAM_COMMISSION_POLICY_MONTH_12_KEY = "aMonth12";

// GoLearn CLASS Module
export const CLASS_ID = "id";
export const CLASS_NAME = "name";
export const CLASS_IMG_URL = "imgUrl";
export const CLASS_DESC = "desc";
export const CLASS_CATEGORY_KEY = "category";
export const CLASS_CATEGORY_ID_KEY = "categoryId";
export const CLASS_SUBJECT_KEY = "subject";
export const CLASS_SUBJECT_ID_KEY = "subjectId";
export const CLASS_ONLINE_KEY = "online";
export const CLASS_VENUE = "venue";
export const CLASS_AREA_KEY = "area";
export const CLASS_AREA_ID_KEY = "areaId";
export const CLASS_STATE_KEY = "state";
export const CLASS_STATE_ID_KEY = "stateId";

export const CLASS_TIMESLOT_DAY_OF_WEEK_ARR = "timeSlotDayOfWeekArr";
export const CLASS_TIMESLOT_START_ARR = "timeSlotStartArr";
export const CLASS_TIMESLOT_END_ARR = "timeSlotEndArr";
export const CLASS_STUDENT_LIMIT = "stuLimit";
export const CLASS_FIRST_CLASS_DATE = "firstClass";
export const CLASS_ANNOUNCEMENT = "announcement";

export const CLASS_FEES_KEY = "fees";
export const CLASS_FEES_PER_MONTH_KEY = "feesPerMonth"; // NEW FEATURE 2.0
export const CLASS_FEES_TYPE_KEY = "feesType";

// export const CLASS_URL = "classUrl";
export const CLASS_TYPE = "classType";
    export const CLASS_TYPE_PRIVATE = "private";
    export const CLASS_TYPE_PUBLIC = "public";
export const CLASS_TAG = "classTag";
export const CLASS_STATUS = "classStatus";
    export const CLASS_STATUS_ACTIVE = "active";
    export const CLASS_STATUS_INACTIVE = "inactive";

export const CLASS_ADMIN_ID = "adminId";
export const CLASS_TUTOR_ID_ARR = "tutorIdArr";
export const CLASS_TUTOR_NAME_ARR = "tutorNameArr";
export const CLASS_TUTOR_PHONE_ARR = "tutorPhoneArr";
export const CLASS_TUTOR_IMG_URL_ARR = "tutorImgUrlArr";
export const CLASS_STUDENT_ID_ARR = "stuIdArr";
export const CLASS_VIEWER_ID_ARR = "viewerIdArr";
export const CLASS_CLASS_URL = "urlClass"; // Zoom
export const CLASS_CHAT_GROUP_URL = "urlGroup"; // Whatsapp / Telegrame
export const CLASS_MATERIAL_URL = "urlMaterial"; // GClass

// export const CLASS_TUTOR1_ADD_EDIT_STUDENT_ENABLE = "perT1AddEditStuEn";
// export const CLASS_TUTOR1_REMOVE_STUDENT_ENABLE = "perT1DelStuEn";
// export const CLASS_TUTOR1_ADD_EDIT_LESSON_ENABLE = "perT1AddEditLessonEn";
// export const CLASS_TUTOR1_REMOVE_LESSON_ENABLE = "perT1AddDelLessonEn";
// export const CLASS_TUTOR2_ADD_EDIT_STUDENT_ENABLE = "perT2AddEditStuEn";
// export const CLASS_TUTOR2_REMOVE_STUDENT_ENABLE = "perT2DelStuEn";
// export const CLASS_TUTOR2_ADD_EDIT_LESSON_ENABLE = "perT2AddEditLessonEn";
// export const CLASS_TUTOR2_REMOVE_LESSON_ENABLE = "perT2AddDelLessonEn";
export const CLASS_STUDENT_AUTO_JOIN_ENABLE = "perStuAutoJoinEn";
export const CLASS_TUTOR_ADD_EDIT_LESSON_ENABLE = "perTAddLesEn";
export const CLASS_TUTOR_REMOVE_LESSON_ENABLE = "perTDelLesEn";
export const CLASS_LABEL_ENABLE = "labelEn";
export const CLASS_LABEL_COLOR = "labelColor";
export const CLASS_LABEL_TEXT = "labelText";

export const CLASS_DATE_ADD = "dateAdd";
export const CLASS_DATE_EDIT = "dateEdit";
export const CLASS_DATE_DEL = "dateDel";
export const CLASS_EDIT_MSG = "editMsg"; // Auto status gen message

// GoLearn LESSON Class Sub-Module
export const LESSON_ID = "id";
export const LESSON_CLASS_ID = "classId";
export const LESSON_ADMIN = "adminId";
export const LESSON_STATUS = "status";
export const LESSON_DATE_ADD = "dateAdd";
export const LESSON_DATE_EDIT = "dateEdit";
export const LESSON_DATE_DEL = "dateDel";

export const LESSON_DATE = "lesDate";
export const LESSON_MONTH_TYPE = "lesMonthType"; // mmm-yyyy
export const LESSON_START = "lesStart";
export const LESSON_END = "lesEnd";
export const LESSON_DESC = "lesDesc";
export const LESSON_FEEDBACK = "lesFeedback";
export const LESSON_RATE = "lesRate";

// GoLearn CLASS_STUDENT Class Sub-Module
export const CLASS_STUDENT_ID = "id";
export const CLASS_STUDENT_CLASS_ID = "classId";
export const CLASS_STUDENT_ADMIN_ID = "adminId";
export const CLASS_STUDENT_DEPENDENT_ID = "depId";
export const CLASS_STUDENT_STATUS = "status";
export const CLASS_STUDENT_DATE_ADD = "dateAdd";
export const CLASS_STUDENT_DATE_EDIT = "dateEdit";
export const CLASS_STUDENT_DATE_DEL = "dateDel";
export const CLASS_STUDENT_ENROLLMENT_STATUS ="statusEnrollment";
    export const CLASS_STUDENT_ENROLLMENT_STATUS_PENDING ="pending";
    export const CLASS_STUDENT_ENROLLMENT_STATUS_ACTIVE ="active";
    export const CLASS_STUDENT_ENROLLMENT_STATUS_INACTIVE ="inactive";

export const CLASS_STUDENT_STU_ID = "stuId";
export const CLASS_STUDENT_STU_NAME = "stuName";
export const CLASS_STUDENT_STU_PHONE = "stuPhone";
export const CLASS_STUDENT_STU_GENDER = "stuGender";
export const CLASS_STUDENT_STU_EMAIL = "stuEmail";
export const CLASS_STUDENT_GUR_ID = "gurId";
export const CLASS_STUDENT_GUR_NAME = "gurName";
export const CLASS_STUDENT_GUR_PHONE = "gurPhone";
export const CLASS_STUDENT_GUR_EMAIL = "gurEmail";
export const CLASS_STUDENT_GUR_ADDR = "gurAddr";
export const CLASS_STUDENT_FEEDBACK = "feedback";
// export const CLASS_STUDENT_BADGE_1 = "badge1"; // UNUSED
// export const CLASS_STUDENT_BADGE_2 = "badge2";
// export const CLASS_STUDENT_BADGE_3 = "badge3";
// export const CLASS_STUDENT_BADGE_4 = "badge4";
// export const CLASS_STUDENT_BADGE_5 = "badge5";


// GoLearn Student Module
export const STU_ID = "id";
export const STU_USER_ID = "userId";
export const STU_ADMIN_ID = "adminId";
export const STU_DEPENDENT_ID = "depId";
export const STU_VIEWER_ID = "viewerId";
export const STU_DATE_ADD = "dateAdd";
export const STU_DATE_EDIT = "dateEdit";
export const STU_DATE_DEL = "dateDel";
export const STU_ENROLLMENT_STATUS ="statusEnrollment";
    export const STU_ENROLLMENT_STATUS_PENDING ="pending";
    export const STU_ENROLLMENT_STATUS_ACTIVE ="active";
    export const STU_ENROLLMENT_STATUS_INACTIVE ="inactive";
export const STU_STATUS = "status";

export const STU_STATUS_ADMIN = "statusAdmin";
export const STU_STATUS_USER = "statusUser"; // mmm-yyyy
export const STU_ADMIN_NAME = "adName";
export const STU_ADMIN_PHONE = "adPhone";
export const STU_ADMIN_ADDR = "adAddr";
export const STU_ADMIN_IMG_URL = "adImgUrl";
export const STU_GUR_ID = "gurId";
export const STU_GUR_RELATIONSHIP = "gurRelationship";
    export const STU_GUR_RELATIONSHIP_PARENTS = "parents";
    export const STU_GUR_RELATIONSHIP_GUARDIAN = "guardian";
    export const STU_GUR_RELATIONSHIP_MYSELF = "myself";
export const STU_GUR_NAME = "gurName";
export const STU_GUR_PHONE = "gurPhone";
export const STU_GUR_GENDER = "gurGender";
export const STU_GUR_EMAIL = "gurEmail";
export const STU_GUR_ADDR = "gurAddr";
export const STU_GUR_STATE_ID = "gurStateId";
export const STU_GUR_AREA_ID = "gurAreaId";
export const STU_CHILD_ID = "childId";
export const STU_CHILD_NAME = "childName";
export const STU_CHILD_PHONE = "childPhone";
export const STU_CHILD_GENDER = "childGender";
export const STU_CHILD_EMAIL = "childEmail";
export const STU_CHILD_SCHOOL = "childSchool";

// GoLearn Dependant Module
export const DEP_ID = "id";
export const DEP_USER_ID = "userId";
export const DEP_DATE_ADD = "dateAdd";
export const DEP_DATE_EDIT = "dateEdit";
export const DEP_DATE_DEL = "dateDel";
export const DEP_STATUS = "status";

export const DEP_GUR_ID = "gurId";
export const DEP_GUR_RELATIONSHIP = "gurRelationship";
    export const DEP_GUR_RELATIONSHIP_PARENTS = "parents";
    export const DEP_GUR_RELATIONSHIP_GUARDIAN = "guardian";
    export const DEP_GUR_RELATIONSHIP_MYSELF = "myself";
export const DEP_GUR_NAME = "gurName";
export const DEP_GUR_PHONE = "gurPhone";
export const DEP_GUR_GENDER = "gurGender";
export const DEP_GUR_EMAIL = "gurEmail";
export const DEP_GUR_ADDR = "gurAddr";
export const DEP_GUR_STATE_ID = "gurStateId";
export const DEP_GUR_AREA_ID = "gurAreaId";
export const DEP_CHILD_ID = "childId";
export const DEP_CHILD_NAME = "childName";
export const DEP_CHILD_PHONE = "childPhone";
export const DEP_CHILD_GENDER = "childGender";
export const DEP_CHILD_EMAIL = "childEmail";
export const DEP_CHILD_SCHOOL = "childSchool";

// Golearn TUTOR Module
export const TUTOR_ID = "id";
export const TUTOR_TUTOR_ID = "tutorId";
export const TUTOR_ADMIN_ID = "adminId";
export const TUTOR_DATE_ADD = "dateAdd";
export const TUTOR_DATE_EDIT = "dateEdit";
export const TUTOR_DATE_DEL = "dateDel";
export const TUTOR_STATUS_ADMIN = "statusAdmin";
export const TUTOR_STATUS_TUTOR = "statusTutor";
    export const TUTOR_STATUS_TYPE_ACTIVE = 'active';
    export const TUTOR_STATUS_TYPE_PASSIVE = 'passive';
    export const TUTOR_STATUS_TYPE_DELETE = 'delete';

export const TUTOR_ADMIN_NAME = "adName";
export const TUTOR_ADMIN_PHONE = "adPhone";
export const TUTOR_ADMIN_EMAIL = "adEmail";
export const TUTOR_ADMIN_ADDR = "adAddr";
export const TUTOR_ADMIN_IMG_URL = "adImgUrl";
export const TUTOR_ADMIN_WEB_URL = "adWebUrl";

export const TUTOR_TUTOR_NAME = "tutorName";
export const TUTOR_TUTOR_PHONE = "tutorPhone";
export const TUTOR_TUTOR_EMAIL = "tutorEmail";
export const TUTOR_TUTOR_GENDER = "tutorGender";
export const TUTOR_TUTOR_AGE = "tutorAge";
export const TUTOR_TUTOR_ADDR = "tutorAddr";
export const TUTOR_TUTOR_IMG_URL = "tutorImgUrl";
export const TUTOR_TUTOR_WEB_URL = "tutorWebUrl";

export const TUTOR_BANK_NAME = "bankName";
export const TUTOR_AC_NO = "bankACNo";
export const TUTOR_EPF = "noEpf";
export const TUTOR_SOCSO = "noSocso";

// export const TUTOR_CLASS_ACTIVE = "classActive";
// export const TUTOR_CLASS_ID_ARR = "classIdArr";

// Golearn Tutor Settings
export const SET_ID = "id";
export const SET_TUTOR_ID = "tutorId"; // main
export const SET_BIZ_NAME = "bizName";
export const SET_BIZ_PHONE = "bizPhone";
export const SET_BIZ_EMAIL = "bizEmail";
export const SET_BIZ_ADDR = "bizAddr";
export const SET_BIZ_IMG_URL = "bizImgUrl";
export const SET_BANK_ACC_NAME = "bankAccName";
export const SET_BANK_ACC_NUM = "bankAccNum";
export const SET_BANK_NAME = "bankName";

export const SET_INV_NOTE = "invNote";
export const SET_INV_FOOTER_NOTE = "invFooterNote";

//  Transaction
export const TRANS_ID = "id";
export const TRANS_DOC_ID = "docId"; //id of the ori doc
export const TRANS_DOC_NUM = "docNo"; //invoice / payslip no.
export const TRANS_SENDER_ID = "idS";
export const TRANS_RECEIVER_ID = "idR";
export const TRANS_SENDER_NAME = "nameS";
export const TRANS_RECEIVER_NAME = "nameR";
export const TRANS_VIEWER_ARR = "viewerArr"; //main
export const TRANS_DATE = "date";
export const TRANS_TITLE = "title";
export const TRANS_TYPE = "type"; // main
    export const TRANS_TYPE_INV = "inv";
    export const TRANS_TYPE_PAY = "pay";
export const TRANS_DOC_STATUS = "docStatus"; // document specific statuses
    export const TRANS_INV_STATUS_DRAFT = "draft";
    export const TRANS_INV_STATUS_NEW = "new";
    export const TRANS_INV_STATUS_PAID = "paid";
    export const TRANS_PAY_STATUS_NEW = "new";
    export const TRANS_PAY_STATUS_PAID = "paid";
    // export const TRANS_PAY_STATUS = "";
export const TRANS_TOTAL = "total";
export const TRANS_DATE_EDIT = "dateEdit";
export const TRANS_STATUS = "status";

//  Invoice
export const INV_ID = "id";
export const INV_TRANS_ID = "transId";
export const INV_SENDER_ID = "idS"; // PK
export const INV_RECEIVER_ID = "idR"; // PK
export const INV_SENDER_NAME = "nameS";
export const INV_SENDER_DETAILS = "descS";
export const INV_SENDER_IMG_URL = "logoUrl";
export const INV_RECEIVER_NAME = "nameR";
export const INV_RECEIVER_DETAILS = "descR";
export const INV_TITLE = "title";
export const INV_NUMBER = "invNo";
export const INV_ISSUE_DATE = "invDate";
export const INV_DUE_DATE = "invDue";
export const INV_INV_STATUS = "invStatus";
    export const INV_STATUS_DRAFT = "draft";
    export const INV_STATUS_NEW = "new";
    export const INV_STATUS_PAID = "paid";

export const INV_ITEMS_ARR = "invItemsArr";
export const INV_TOTAL = "invTotal";
export const INV_NOTES = "note";
export const INV_FOOTER_NOTES = "noteFooter";

export const INV_PAYMENT_DATE = "payDate";
export const INV_PAYMENT_AMOUNT = "payAmount";
export const INV_PAYMENT_NOTE = "payNote";

export const INV_DATE_ADD = "dateAdd";
export const INV_DATE_EDIT = "dateEdit";
export const INV_DATE_DEL = "dateDel";
export const INV_STATUS = "status";

//  Payroll
export const PAYROLL_ID = "id";
export const PAYROLL_ADMIN_ID = "adminId"; // main
export const PAYROLL_NAME = "name";
export const PAYROLL_DATE_START = "start";
export const PAYROLL_DATE_END = "end";
export const PAYROLL_DOC_ID_ARR = "docIdArr";
export const PAYROLL_DOC_TOTAL_ARR = "docTotalArr";
export const PAYROLL_TOTAL = "total";
export const PAYROLL_STATUS = "status";

//  Payslip (Payroll)
export const PAY_ID = "id";
export const PAY_PAYROLL_ID = "payrollId";
export const PAY_PAYROLL_NAME = "payrollName";
export const PAY_TRANS_ID = "transId";
export const PAY_SENDER_ID = "idS"; // main
export const PAY_RECEIVER_ID = "idR";
export const PAY_SENDER_NAME = "nameS";
export const PAY_SENDER_DETAILS = "descS";
export const PAY_SENDER_IMG_URL = "logoUrl";
export const PAY_RECEIVER_NAME = "nameR";
// export const PAY_RECEIVER_DETAILS = "descR";
export const PAY_RECEIVER_POSITION = "position";
export const PAY_RECEIVER_EPF = "epf";
export const PAY_RECEIVER_SOCSO = "socso";
export const PAY_RECEIVER_BANK_NAME = "bank";
export const PAY_RECEIVER_AC_NO = "acno";

export const PAY_TITLE = "title";
export const PAY_NUMBER = "payNo";
export const PAY_DATE = "date";
// export const PAY_DUE_DATE = "invDue";
export const PAY_PAY_STATUS = "payStatus";
    // export const PAY_STATUS_DRAFT = "draft";
    export const PAY_STATUS_NEW = "new";
    export const PAY_STATUS_PAID = "paid";

export const PAY_ITEMS_ARR = "payItemsArr";
export const PAY_TOTAL = "payTotal";
export const PAY_NOTES = "note";
export const PAY_FOOTER_NOTES = "noteFooter";

export const PAY_PAYMENT_DATE = "payDate";
export const PAY_PAYMENT_AMOUNT = "payAmount";
export const PAY_PAYMENT_NOTE = "payNote";

export const PAY_DATE_ADD = "dateAdd";
export const PAY_DATE_EDIT = "dateEdit";
export const PAY_DATE_DEL = "dateDel";
export const PAY_STATUS = "status";

//  Report (Revenue)
export const REV_ID = "id";
export const REV_ADMIN_ID = "adminId"; // PK
export const REV_NAME = "name";
export const REV_REF_ID = "refId";
export const REV_TYPE = "type";
    export const REV_TYPE_CAT = "cat";
    export const REV_TYPE_TAG = "tag";
    export const REV_TYPE_ORG = "org";
export const REV_MONTH = "month"; // YYYYMM, YYYY21-32, YYYY99)
export const REV_TOTAL = "total";
export const REV_DOC_ID_ARR = "docIdArr";
export const REV_DOC_TOTAL_ARR = "docTotalArr";
export const REV_DATE_EDIT = "dateEdit";
export const REV_STATUS = "status";

//  Report (Student / Class / Teacher / Profile View / Public Course)
export const NUM_ID = "id";
export const NUM_ADMIN_ID = "adminId"; // PK
export const NUM_TYPE = "type";
    export const NUM_TYPE_STUDENT = "student";
    export const NUM_TYPE_TEACHER = "teacher";
    export const NUM_TYPE_CLASS = "class";
    export const NUM_TYPE_PUBLIC_COURSE = "public_course";
    export const NUM_TYPE_PROFILE_VIEW = "profile_view";
export const NUM_VALUE = "value";
export const NUM_DATE_EDIT = "dateEdit";

// Report (Invoice Check)
export const INV_CHECK_ID = "id";
export const INV_CHECK_ADMIN_ID = "adminId"; // PK
export const INV_CHECK_MONTH = "month"; // Format: YYYYMM
export const INV_CHECK_INV_ID_ARR = "invIdArr";
export const INV_CHECK_INV_NO_ARR = "invNoArr";
export const INV_CHECK_INV_RECEIVER_ID_ARR = "invRIdArr";
export const INV_CHECK_INV_RECEIVER_NAME_ARR = "invRNameArr";
export const INV_CHECK_INV_STATUS_ARR = "invStatusArr";
export const INV_CHECK_INV_TOTAL_ARR = "invTotalsArr";
export const INV_CHECK_GUR_ID_ARR = "gurIdArr";
export const INV_CHECK_GUR_NAME_ARR = "gurNameArr";
// export const INV_CHECK_STU_ID_ARR = "stuIdArr";
// export const INV_CHECK_STU_NAME_ARR = "stuNameArr";
export const INV_CHECK_DATE_EDIT = "dateEdit";

//  Review (Review > v1 > Review)
export const REVIEW_ID = "id";
export const REVIEW_RECEIVER_ID = "recId"; // PK
export const REVIEW_RECEIVER_NAME = "recName";
export const REVIEW_RECEIVER_IMG = "recImgUrl"
export const REVIEW_REVIEWER_ID = "revId";
export const REVIEW_REVIEWER_NAME = "revName";
export const REVIEW_REVIEWER_IMG = "revImgUrl"
export const REVIEW_RATE = "value";
export const REVIEW_COMMENT = "comment";
export const REVIEW_DATE_ADDED = "dateAdded";
export const REVIEW_STATUS = "status";
    export const REVIEW_STATUS_PENDING = "pending";
    export const REVIEW_STATUS_APPROVED = "approved";

//  Track Impressions / Clicks / Pageviews (track > v1 > [imp, clk, pgvw])
export const TRACK_GEN_ID = "id";
export const TRACK_GEN_TUTOR_ID = "tid";
export const TRACK_GEN_PAGE = "page";
export const TRACK_GEN_POS = "pos";
export const TRACK_GEN_DATE = "date";

export const TRACK_GEN_QUERY = "q";
export const TRACK_GEN_QUERY_SUB = "sub";
export const TRACK_GEN_QUERY_CAT = "cat";
export const TRACK_GEN_QUERY_AREA = "area";
export const TRACK_GEN_QUERY_STATE = "state";

export const TRACK_GEN_GEO = "geo";
export const TRACK_GEN_GEO_IP = "ip";
export const TRACK_GEN_GEO_CITY = "city";
export const TRACK_GEN_GEO_STATE = "area";
export const TRACK_GEN_GEO_COUNTRY = "country";

//  Track Summary of Impressions / Clicks / Pageviews (track > v1 > [sum_imp, sum_clk, sum_pgvw])
export const TRACK_SUM_ID = "id";
export const TRACK_SUM_TARGET_ID = "target_id";
export const TRACK_SUM_DATE = "date";
export const TRACK_SUM_SUM = "sum";
export const TRACK_SUM_ITEM = "item";
export const TRACK_SUM_ITEM_KEY = "key";
export const TRACK_SUM_ITEM_VAL = "val";


//  Public (public > v1 > tutor > v1> [default, state ,...])
export const PUBLIC_ID = "id";
export const PUBLIC_TUTOR_ID = "tutorId";
export const PUBLIC_NAME = "name";
export const PUBLIC_IMG_URL = "imgUrl";
export const PUBLIC_TUTORING_APPROACH = "tAprch";
export const PUBLIC_PREFERED_AREA_LIST = "pAreaArr";
export const PUBLIC_RATING_TIMES = "rateTimes";
export const PUBLIC_RATING_FINAL = "rateFinal";
export const PUBLIC_MODE = "mode"; // [bool, bool]
export const PUBLIC_ACCOUNT_STATUS = "accStatus";
export const PUBLIC_PROFILE_LEVEL = "pl";
    export const PUBLIC_PROFILE_LEVEL_NEW = 1;
    export const PUBLIC_PROFILE_LEVEL_EXPERIENCED = 3;
    export const PUBLIC_PROFILE_LEVEL_PRO = 5;
    export const PUBLIC_PROFILE_LEVEL_PREMIUM = 7;
export const PUBLIC_RS_SCORE = "rs";
export const PUBLIC_LAST_UPDATE = "lastUpdate";

// Setting (/Settings/v1/category)
export const SET_CAT_ID = 'id';
export const SET_CAT_TUTOR_ID = "tutorId";
export const SET_CAT_NAME_ARR = 'nameArr';
export const SET_CAT_ID_ARR = 'idArr';
export const SET_CAT_SLUG_ARR = 'slugArr';
    export const SET_CAT_SLUG_UNCATEGORIZED = "uncategorized";
export const SET_CAT_DATE_EDIT = "dateEdit";

// Setting (/Settings/v1/category_single)
export const SET_CAT_SINGLE_ID = 'id';
export const SET_CAT_SINGLE_TUTOR_ID = "tutorId";
export const SET_CAT_SINGLE_NAME = 'name';
export const SET_CAT_SINGLE_SLUG = 'slug';
export const SET_CAT_SINGLE_DESC = 'desc';
export const SET_CAT_SINGLE_DATE_EDIT = "dateEdit";

// Course (/course/v1/course)
export const COURSE_ID = 'id';
export const COURSE_ADMIN_ID = "aid";
export const COURSE_CLASS_ID = "cid";
export const COURSE_CONTENT_ID = "contentId";
export const COURSE_URL = "url";
export const COURSE_NAME = 'name';
export const COURSE_DESC = 'desc';
export const COURSE_VENUE = 'venue';
export const COURSE_TIMESLOT_DAY_OF_WEEK_ARR = "timeDayOfWeek";
export const COURSE_TIMESLOT_START_ARR = "timeStart";
export const COURSE_TIMESLOT_END_ARR = "timeEnd";
export const COURSE_OBJ_ARR = "obj";
export const COURSE_MODE_ARR = "mode"; // [MODE_<X>]
export const COURSE_LAN_ARR = "lan"; //[LAN_<X>]
export const COURSE_INCLUDE = "include";
export const COURSE_FEE = "fee";
export const COURSE_FEE_TYPE = "feeType";
export const COURSE_FEE_DESC = "feeDesc";
export const COURSE_RATE = "rate";
export const COURSE_RATE_TIMES = "rateTimes";
export const COURSE_RATE_FINAL = "rateFinal";
export const COURSE_CAT_ID = "cat";
export const COURSE_SUB_ID = "sub";
export const COURSE_STATE_ID = "state";
export const COURSE_AREA_ID = "area";
export const COURSE_DATE_CREATE = "dateC";
export const COURSE_DATE_UPDATE = "dateU";
export const COURSE_STATUS = "status";
    export const COURSE_STATUS_DRAFT = "draft";
    export const COURSE_STATUS_REVIEW = "review";
    export const COURSE_STATUS_ACTIVE = "active";
    export const COURSE_STATUS_INACTIVE = "inactive";
    export const COURSE_STATUS_SUSPENDED = "suspended";
export const COURSE_STATUS_MESSAGE = "statusMssg";

// Course (/course/v1/content)
export const COURSE_CONTENT_UID = 'id';
export const COURSE_CONTENT_ADMIN_ID = "aid";
export const COURSE_CONTENT_COURSE_ID = "cid";
export const COURSE_CONTENT_CLASS_ID = "classId";
export const COURSE_CONTENT_ITEM = "item";
export const COURSE_CONTENT_DATE_UPDATE = "dateU";

// Request (/request/v1/all)
export const REQUEST_ID = 'id';
export const REQUEST_ADMIN_ID = 'adminId';
export const REQUEST_REQUESTER_NAME = 'name';
export const REQUEST_REQUESTER_PHONE = 'phone';
export const REQUEST_REQUESTER_EMAIL = 'email';
export const REQUEST_REQUESTER_PERSON = 'person';
    export const REQUEST_REQUESTER_PERSON_PARENT = 'parent';
    export const REQUEST_REQUESTER_PERSON_STUDENT = 'student';
export const REQUEST_REQUESTER_MESSAGE = 'message';
export const REQUEST_TYPE = 'type';
    export const REQUEST_TYPE_COURSE = 'course';
    export const REQUEST_TYPE_TUTOR = 'tutor';
export const REQUEST_URL = 'url';
export const REQUEST_TARGET_ID = 'targetId';
export const REQUEST_TARGET_NAME = 'targetName';
export const REQUEST_TARGET_FEE = 'fee';
export const REQUEST_TARGET_FEE_TYPE = 'feetype';
export const REQUEST_CAT_ARR = 'catArr';
export const REQUEST_SUB_ARR = 'subArr';
export const REQUEST_AREA = 'area';
export const REQUEST_STATE = 'state';
export const REQUEST_DATE_SENT = 'dateSend';
export const REQUEST_DATE_READ = 'dateRead';
export const REQUEST_DATE_READ_ADMIN = 'dateReadAdmin';
export const REQUEST_STATUS = 'status';

// org/v1/user
export const ORG_USER_UID = "uid"; // Org User Id. Similar to document Id
export const ORG_USER_NAME = "name"
export const ORG_USER_PHONE = "phone"
export const ORG_USER_EMAIL = "email"
export const ORG_USER_IMAGE_URL = "imgUrl";
export const ORG_USER_LAST_ONLINE = "lastOnline"
export const ORG_USER_ACCOUNT_STATUS = "accountStatus"
export const ORG_USER_ORG_ID = "orgId";
export const ORG_USER_ACC_ID_ARR = "accIdArr";

// org/v1/org
export const ORG_ORG_ID = "id"; // Organization Id
export const ORG_ORG_URL= "url";
export const ORG_ORG_ORG_ID = "orgId"
export const ORG_ORG_ACC_ID_ARR = "accIdArr"
export const ORG_ORG_OID = "oid"
export const ORG_ORG_AID = "aid";
export const ORG_ORG_TYPE = "type";
    export const ORG_TYPE_ORG = "org"
    export const ORG_TYPE_ACC = "acc"
export const ORG_ORG_LAST_ONLINE = "lastOnline"
export const ORG_ORG_RATING = "rating"
export const ORG_ORG_RATING_TIMES = "ratingTimes"
export const ORG_ORG_RATING_FINAL = "ratingFinal"
export const ORG_ORG_STATUS = "accountStatus"
export const ORG_ORG_NAME = "name"
export const ORG_ORG_PHONE = "phone"
export const ORG_ORG_EMAIL = "email"
export const ORG_ORG_ADDRESS = "addr"
export const ORG_ORG_AREA = "areaId"
export const ORG_ORG_STATE = "stateId"
export const ORG_ORG_IMG_URL = "imgUrl"
export const ORG_ORG_COVER_IMG_URL = "coverImgUrl"
export const ORG_ORG_ONE_LINER = "oneLiner"
export const ORG_ORG_INTRO = "intro"
export const ORG_ORG_LAN = "lan"
export const ORG_ORG_TIME_SLOT_ARR = "timeSlotArr"
// export const ORG_ORG_PREFERRED_AREA_ARR = "preferredAreaArr" // UNUSED
export const ORG_ORG_PREFERRED_SUBJECT_ARR = "preferredSubArr"
export const ORG_ORG_CORP = "corp"
export const ORG_ORG_CORP_ID = "corpId"
export const ORG_ORG_ADMIN_STATUS = 'adminStatus' // Set by admin to disable an acc/org
    export const ORG_ADMIN_STATUS_ACTIVE = "active"
    export const ORG_ADMIN_STATUS_INACTIVE = "inactive"

// org/v1/role
export const ORG_ROLE_ID = "id";
export const ORG_ROLE_UID= "uid"; // Org User Id assigned to this role
export const ORG_ROLE_URL = "url"
export const ORG_ROLE_ORG_ID = "orgId"
export const ORG_ROLE_ACC_ID = "accId"
export const ORG_ROLE_TYPE = "type";
export const ORG_ROLE_OID = "oid";
export const ORG_ROLE_EMP_STATUS = "status" // same with ORG_EMP_STATUS
export const ORG_ROLE_EMP_ID = "empId"
export const ORG_ROLE_EMP_NAME = "empName"
export const ORG_ROLE_EMP_PHONE= "empPhone";
export const ORG_ROLE_EMP_EMAIL = "empEmail";
export const ORG_ROLE_EMP_IMG_URL = "empImgUrl"

export const ORG_ROLE_EMP_REF = "empRef"
export const ORG_ROLE_REPORT_TO = "empReportTo"
export const ORG_ROLE_EMP_TITLE = "empTitle";
export const ORG_ROLE_EMP_ROLE = "empRole";
    export const ORG_ROLE_OWNER = "owner"
    export const ORG_ROLE_SUPER_ADMIN = "superAdmin"
    export const ORG_ROLE_ADMIN = "admin"
    export const ORG_ROLE_STAFF = "staff"
    export const ORG_ROLE_ASSISTANT = "assistant"
    export const ORG_ROLE_NO_ROLE = "noRole"
export const ORG_ROLE_ALLOWED_PERMISSION_ARR = "allowedPermissionArr"

export const ORG_ROLE_ORG_NAME = "orgName"
export const ORG_ROLE_ORG_IMG_URL = "orgImgUrl"
export const ORG_ROLE_ORG_COVER_IMG_URL = "orgCoverImgUrl"
export const ORG_ROLE_ADMIN_STATUS = 'adminStatus' // Set by admin to disable an acc/org


// org/v1/employee
export const ORG_EMP_ID = "id";
export const ORG_EMP_UID= "uid"; // Org User Id assigned to this role
export const ORG_EMP_URL = "url"
export const ORG_EMP_ORG_ID = "orgId"
export const ORG_EMP_ACC_ID = "accId"
export const ORG_EMP_TYPE = "type";
export const ORG_EMP_OID = "oid";
export const ORG_EMP_STATUS = "status"
    export const ORG_EMP_STATUS_NEW = "new"
    export const ORG_EMP_STATUS_ACTIVE = "active"
    export const ORG_EMP_STATUS_INACTIVE = "inactive"
    export const ORG_EMP_STATUS_REJECTED = "reject"
export const ORG_EMP_NAME = "name"
export const ORG_EMP_PHONE= "phone";
export const ORG_EMP_EMAIL = "email";
export const ORG_EMP_GENDER = "gender"
export const ORG_EMP_IMG_URL = "imgUrl"
export const ORG_EMP_DATE_JOINED = "dateJoined"
export const ORG_EMP_BANK_NAME = "bankName"
export const ORG_EMP_BANK_ACC = "bankAccNo"
export const ORG_EMP_EPF = "epf"
export const ORG_EMP_SOCSO = "socso"
export const ORG_EMP_TAX_NO = "taxNo"
export const ORG_EMP_ADMIN_STATUS = 'adminStatus' // Set by admin to disable an acc/org

// export const ORG_EMP_REF = "ref"
// export const ORG_EMP_REPORT_TO = "reportTo"
// export const ORG_EMP_IC = "ic"
// export const ORG_EMP_ALLOWED_PERMISSION_ARR = "allowedPermissionArr"

// -------------- Session Storage Key Start -------------- //
// CLIENT: Profile Obj
export const PROFILE_CLIENT_INFO = "clientInfoObj";
// TUTOR: Profile Obj
export const PROFILE_TUTOR_INFO = "tutorInfoObj";
// TUTOR: Class Module
export const SESSION_STORAGE_CLASS_ALL_DOCS_KEY = "allDocs";
export const SESSION_STORAGE_CLASS_CURRENT_DOC_KEY = "currentDoc";
export const SESSION_STORAGE_CLASS_CURRENT_DOC_ID_KEY = "currentDocId";
export const SESSION_STORAGE_CLASS_LOAD_KEY = "load"; // True => load/show, vice versa
export const SESSION_STORAGE_CLASS_NON_ADMIN_KEY = "nonAdmin";
export const SESSION_STORAGE_CLASS_NUM_KEY = "classNum";
// export const SESSION_STORAGE_CLASS_KEY = "sessionStorageClass";
// TUTOR: Student Module
export const SESSION_STORAGE_STUDENT_ALL_DOCS_KEY = "allStudentsDocs";
export const SESSION_STORAGE_STUDENT_CURRENT_DOC_KEY = "currentStudentDoc";
// TUTOR: Dependant Module
export const SESSION_STORAGE_DEPENDANT_ALL_DOCS_KEY = "allDependantsDocs";
export const SESSION_STORAGE_DEPENDANT_CURRENT_DOC_KEY = "currentDependantDoc";
// TUTOR: Tutor Module
export const SESSION_STORAGE_TUTOR_ALL_DOCS_KEY = "allTutorsDocs";
export const SESSION_STORAGE_TUTOR_CURRENT_DOC_KEY = "currentTutorDoc";

// TUTOR:Transaction Module
export const SESSION_STORAGE_TRANSACTION_ALL_DOCS_KEY = "allTransactionDocs";
export const SESSION_STORAGE_TRANSACTION_CURRENT_DOC_KEY = "currentTransactionDoc";

// TUTOR:Invoice Module
export const SESSION_STORAGE_INVOICE_ALL_DOCS_KEY = "allInvoiceDocs";
export const SESSION_STORAGE_INVOICE_CURRENT_DOC_KEY = "currentInvoiceDoc";

// TUTOR:Payroll Module
export const SESSION_STORAGE_PAYROLL_ALL_DOCS_KEY = "allPayrollDocs";
export const SESSION_STORAGE_PAYROLL_CURRENT_DOC_KEY = "currentPayrollDoc";

// TUTOR:Payslip Module
export const SESSION_STORAGE_PAYSLIP_ALL_DOCS_KEY = "allPayslipDocs";
export const SESSION_STORAGE_PAYSLIP_CURRENT_DOC_KEY = "currentPayslipDoc";
// TUTOR:Salary Module
export const SESSION_STORAGE_SALARY_ALL_DOCS_KEY = "allSalaryDocs";
export const SESSION_STORAGE_SALARY_CURRENT_DOC_KEY = "currentSalaryDoc";

// CLIENT: Class Module
export const SESSION_STORAGE_CLIENT_CLASS_ALL_DOCS_KEY = "allClientClassDocs";
export const SESSION_STORAGE_CLIENT_CLASS_CURRENT_DOC_KEY = "currentClientClassDoc";

// CLIENT:Invoice Module
export const SESSION_STORAGE_CLIENT_INVOICE_ALL_DOCS_KEY = "allClientInvoiceDocs";
export const SESSION_STORAGE_CLIENT_INVOICE_CURRENT_DOC_KEY = "currentClientInvoiceDoc";

// ADMIN: Review Module
export const SESSION_STORAGE_REVIEW_ALL_DOCS_KEY = "allReviewDocs";
export const SESSION_STORAGE_REVIEW_CURRENT_DOC_KEY = "currentReviewDoc";

// ORGANIZATION: Org User
export const SESSION_STORAGE_PROFILE_ORG_USER = "orgUser";

// ORGANIZATION: Organization /Account Entity
export const SESSION_STORAGE_ORG_ENTITY = "orgEntity";

// ORGANIZATION: Org User Role
export const SESSION_STORAGE_PROFILE_ORG_USER_ROLE = "orgUserRole"
// -------------- Session Storage Key End   -------------- //