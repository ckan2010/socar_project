CREATE TABLE Member(
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  pw VARCHAR(20) NOT NULL,
  phone VARCHAR(13) NOT NULL,
  address VARCHAR(255) NOT NULL,
  license_type VARCHAR(30),
  license_num VARCHAR(20),
  license_end DATE,
  license_start DATE,
  birth VARCHAR(8) NOT NULL,
  gender VARCHAR(10) NOT NULL
);
INSERT INTO Member VALUES ('hong','홍길동','1','010-1234-1234',
'경기도 부천시 소사동','1종보통','8282','2017-06-01','2010-08-01','800514','남자');
CREATE TABLE Card (
  card_num VARCHAR(20) PRIMARY KEY,
  card_pw VARCHAR(20),
  card_month VARCHAR(2) NOT NULL,
  card_year VARCHAR(4) NOT NULL,
  business_num VARCHAR(13),
  id VARCHAR(20),
  CONSTRAINT FOREIGN KEY(id) REFERENCES Member(id) ON DELETE CASCADE ON UPDATE CASCADE
);  
INSERT INTO Card VALUES ('0000-0000-0000-0000','1352','07','2017', '', 'hong');
CREATE TABLE Coupon_master(
  coupon_master_seq BIGINT       UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  coupon_name       VARCHAR(100)  NOT NULL,
  open_date_start   DATETIME     NOT NULL,
  open_date_end     DATETIME     NOT NULL,
  ep_date       DATETIME     NOT NULL,  
  option_header     VARCHAR(255) NOT NULL,
  option_detail     TEXT         NOT NULL,
  img_name          VARCHAR(20)  NOT NULL,
  dc_option         VARCHAR(255) NOT NULL,
  dc                INT          NOT NULL,
  coupon_count      INT          NOT NULL
);
INSERT INTO  Coupon_master VALUES (1,'선물쿠폰','2012-01-03 12:00:00','2012-02-03 12:00:00','2012-02-02 12:00:00',
'50%할인이가능','본쿠폰은 킹왕짱쿠폰이다','coupon1.jsp','%', 30, 2000);
CREATE TABLE Coupon_member(
  coupon_member_seq BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  coupon_master_seq BIGINT UNSIGNED NOT NULL ,
  use_flag          VARCHAR(1)  NOT NULL DEFAULT 'N',
  id                VARCHAR(20) NOT NULL,
  FOREIGN KEY(coupon_master_seq) REFERENCES coupon_master(coupon_master_seq) ON DELETE CASCADE,
  FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE
);
INSERT INTO Coupon_member VALUES (1, 1, 'N', 'hong');
CREATE TABLE Customer(
  customer_seq BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category     VARCHAR(40)     NOT NULL,
  title        VARCHAR(255)    NOT NULL,
  content      TEXT            NOT NULL,
  answer       TEXT            NOT NULL,
  file_name    VARCHAR(20),            
  role         VARCHAR(20)     NOT NULL,
  reg_date     VARCHAR(20)     NOT NULL,
  id           VARCHAR(20),             
  FOREIGN KEY(id) REFERENCES Member(id) ON DELETE CASCADE
);
INSERT INTO Customer VALUES (1, "예약하기", "예약은 어떻게 하나요?", "예약을 하려는데 어떻게 하면 되나요?", "잘 하면 됩니다", "", "CUSTOMER",
"2016-09-09", "hong");
CREATE TABLE Car(
  car_num     VARCHAR(20) NOT NULL PRIMARY KEY,
  car_type    VARCHAR(40) NOT NULL,
  oil_type    VARCHAR(20) NOT NULL,
  car_option  VARCHAR(255),
  socar_zone  VARCHAR(255) NOT NULL,
  rent_amt    INT          NOT NULL,
  drive_amt   INT          NOT NULL,
  car_img varchar(20)
);
INSERT INTO Car VALUES (4885, "벤츠", "휘발유", "네비게이션", "신촌 2번출구", 17000, 200, "benz.jpg");
CREATE TABLE Rent(
  rent_seq   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  start_date DATETIME NOT NULL,
  end_date   DATETIME NOT NULL,
  milege     INT      NOT NULL,
  car_num    VARCHAR(20) NOT NULL,
  coupon_member_seq BIGINT UNSIGNED,
  id         VARCHAR(20) NOT NULL,
  FOREIGN KEY (id) REFERENCES Member (id) ON DELETE CASCADE,
  FOREIGN KEY(car_num) REFERENCES Car(car_num) ON DELETE CASCADE,
  FOREIGN KEY(coupon_member_seq) REFERENCES Coupon_member(coupon_member_seq) ON DELETE CASCADE
);
INSERT INTO Rent VALUES (1, "2016-09-01 12:00:00", "2016-09-02 12:00:00", 20, 4885, 1, "hong");
CREATE TABLE Payment(
  payment_seq  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  payment_date DATETIME NOT NULL,
  payment_amt  INT      NOT NULL,
  payment_type VARCHAR(20),
  rent_seq     BIGINT UNSIGNED NOT NULL,
  card_num     VARCHAR(20) NOT NULL,
  FOREIGN KEY(rent_seq) REFERENCES Rent(rent_seq) ON DELETE CASCADE,
  FOREIGN KEY(card_num) REFERENCES Card(card_num) ON DELETE CASCADE
);
INSERT INTO Payment VALUES (1, "2016-09-01 12:00:00", 20000, "CARD", 1, "0000-0000-0000-0000");
/* 더미 데이터 추가 */
INSERT INTO Member VALUES ('admin','관리자','admin','010-0000-0000',
'관리자의 주소','1종보통','8282','2017-06-01','2010-08-01','800514','남자');
INSERT INTO  Coupon_master VALUES (2,'반짝쿠폰','2012-02-04 12:00:00','2012-03-04 12:00:00','2012-03-03 12:00:00',
'2000원 할인','본쿠폰은 2000원을 깎아준다!','coupon2.jsp','-', 2000, 3);
INSERT INTO  Coupon_master VALUES (3,'좋은쿠폰','2012-01-04 12:00:00','2012-02-04 12:00:00','2012-02-03 12:00:00',
'500원 할인','500원이라도 깎아드립니다','coupon3.jsp','-', 500, 2);
call insert_car (4886, "bmw", "경유", "네비게이션, 블랙박스", "신촌 2번출구", 12000, 150, "bmw.jpg");
INSERT INTO Car VALUES (4887, "아우디", "휘발유", "네비게이션, 블랙박스", "신촌 6번출구", 8000, 250, "audi.jpg");
INSERT INTO Car VALUES (4888, "sm5", "휘발유", "네비게이션, 블랙박스", "신촌 6번출구", 9000, 190, "sm5.jpg");
INSERT INTO Car VALUES (4889, "k5", "휘발유", "블랙박스", "홍대입구", 5000, 120, "k5.jpg");
INSERT INTO Customer VALUES (2, "가입문의", "면허없는데 가입 가능한가요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (3, "차량이용", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (4, "불편접수", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (5, "문의", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (6, "법인단체", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (7, "탈퇴", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (8, "쏘파라치", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (9, "기타", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (10, "예약하기", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (11, "가입문의", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (12, "차량이용", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (13, "불편접수", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (14, "건의", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (15, "쿠폰", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (16, "법인단체", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (17, "쏘파라치", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (18, "기타", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (19, "결제", "예약은 어떻게 하나요?", "제곧내","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (20, "예약하기", "예약은 어떻게 하나요?", "냉무","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
INSERT INTO Customer VALUES (21, "예약하기", "예약은 어떻게 하나요?", "냉무","잘 하면 됩니다", "", "CUSTOMER","2016-09-09", "hong");
drop table customer;
drop table payment;
drop table card;
drop table rent;
drop table coupon_member;
drop table member;
drop table coupon_master;
drop table car;
select * from member;
select * from card;
select * from coupon_master;
select * from coupon_member;
select * from customer;
select * from car;
select * from rent;
select * from payment;
/* update  */
/* PROCEDURE */
DROP VIEW member_customer;
CREATE OR REPLACE VIEW member_customer AS
SELECT 1 + (SELECT COUNT(*)
            FROM   customer t
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NOT NULL
            AND    t.role = 'CUSTOMER'
           ) as num
      ,c.title
      ,c.content
      ,c.reg_date
      ,c.customer_seq
      ,c.id
FROM   customer c
WHERE  c.id IS NOT NULL
AND    c.role = 'CUSTOMER';
CREATE PROCEDURE insert_member(
 IN sp_id varchar(20),
 IN sp_name varchar(20),
 IN sp_pw varchar(20),
 IN sp_phone varchar(13),
 IN sp_address varchar(255),
 IN sp_license_type varchar(30),
 IN sp_license_num varchar(20),
 IN sp_expire_date date,
 IN sp_issue_date date,
 IN sp_birth varchar(8),
 IN sp_gender varchar(10)
  )
BEGIN
   INSERT INTO member(
  id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender
 )
   VALUES(
  sp_id,sp_name,sp_pw,sp_phone,sp_address,sp_license_type,sp_license_num,sp_expire_date,sp_issue_date,sp_birth,sp_gender
  );
END ;
call insert_member('lee','이정현','1','010-2222-2222',
'경기도김포시행복동','2종보통','6969','2017-06-01','2010-08-01','901020','여자');
CREATE PROCEDURE UPDATE_MEMBER
    (
        IN  sp_pw          varchar(20), 
        IN  sp_phone varchar(13),
        IN  sp_address  varchar(255),
        IN  sp_id                  varchar(20)
    )
BEGIN
    UPDATE member
    SET   
          pw  = sp_pw,
          phone = sp_phone,
          address  = sp_address
    WHERE  id = sp_id ;
END;
call update_member('5','011-1111-1111','사랑시 고백구 행복동','hong');
CREATE PROCEDURE insert_card(
  IN sp_card_num varchar(13),
  IN sp_card_pw varchar(20),
  IN sp_card_month varchar(2),
  IN sp_card_year varchar(4),
  IN sp_business_num varchar(13),
  IN sp_id varchar(20)
  )
BEGIN
   INSERT INTO card(
  card_num,
  card_pw,
  card_month,
  card_year,
  business_num,
  id
 )
   VALUES(
  sp_card_num,
  sp_card_pw,
  sp_card_month,
  sp_card_year,
  sp_business_num,
  sp_id
  );
END ;
call insert_card('9432-6763','2352','03','2018','123456789','lee');
/*
======== META_GROUP =========
@AUTHOR : ckan2010@gmail.com
@CREATE DATE : 2016-10-15
@UPDATE DATE : 2016-10-15
@DESC : 메타데이터
*/
SELECT *
FROM   information_schema.`TABLES`
WHERE  table_type = 'VIEW'
AND    table_schema = 'MYSQL'
;
SELECT *
FROM   INFORMATION_SCHEMA.ROUTINES
WHERE  routine_type IN ('FUNCTION','PROCEDURE')
;
/*
================ NOTICE_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 공지사항
=====================================
*/
DROP TABLE IF EXISTS CUSTOMER;
CREATE TABLE customer(
   customer_seq BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,/* 고객센터순서 */
   category     VARCHAR(40)     NOT NULL, /* 문의분류 */
   title        VARCHAR(255)    NOT NULL, /* 제목 */
   content      TEXT            NOT NULL, /* 내용 */
   answer       TEXT                    , /* 답변 */
   file_name    VARCHAR(20),              /* 파일이름 */
   role         VARCHAR(20)     NOT NULL, /* 권한 */
   reg_date     VARCHAR(20)     NOT NULL, /* 등록일자 */
   id           VARCHAR(20),              /* 회원아이디(fk) */
   FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE
   );
DROP VIEW notice;
CREATE OR REPLACE VIEW notice AS
SELECT 1 + (SELECT COUNT(*)
            FROM   customer t
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NULL
            AND    t.role = 'NOTICE'
           ) as num
      ,c.title
      ,c.content
      ,c.reg_date
      ,c.customer_seq
FROM   customer c
WHERE  c.id IS NULL
AND    c.role = 'NOTICE'
;
DROP PROCEDURE IF EXISTS insert_notice;
-- INSERT_NOTICE
CREATE PROCEDURE insert_notice (IN sp_title      VARCHAR(255),
                                IN sp_content    TEXT,
                                IN sp_reg_date   VARCHAR(20)  
                               )
BEGIN
  insert into customer(category,title,content,role,reg_date)
  values('공지사항',sp_title,sp_content,'NOTICE',sp_reg_date);
  commit;
END;
DROP PROCEDURE IF EXISTS update_notice;
-- UPDATE_NOTICE
CREATE PROCEDURE update_notice (IN sp_title        VARCHAR(255),
                                IN sp_content      TEXT,
                                IN sp_customer_seq BIGINT
                               )
BEGIN
  update customer
  SET    title   = ifnull(sp_title,title),
         content = ifnull(sp_content,content)
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
DROP PROCEDURE IF EXISTS delete_notice;
-- DELETE_NOTICE
CREATE PROCEDURE delete_notice (IN sp_customer_seq BIGINT
                               )
BEGIN
  delete
  from   customer
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
/*
================ CUSTOMER_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 고객센터
=====================================
*/
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('sana','사나','1','010-1234-5678','서울시 은평구 증산로 285','1종보통','11-95-216334-11','2025-12-31 23:59:59','2015-02-24 23:59:59','19961229','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('bae1','배수지','1','010-1234-5679','서울시 마포구 대조동','2종오토','11-95-216334-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19941010','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('bewhy','비와이','1','010-1111-1111','인천시 부천구 부천로1','1종보통','11-95-216354-11','2025-12-31 23:59:59','2015-02-24 23:59:59','19930615','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('choi','최우식','1','010-2222-2222','서울시 강남구 청담동','2종오토','11-95-216336-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19900326','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('gong','공유','1','010-3333-3333','서울시 강남구 압구정동','1종보통','11-95-216355-11','2025-12-31 23:59:59','2015-02-24 23:59:59','19790710','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('gong1','공효진','1','010-4444-4444','서울시 강남구 압구정동','2종오토','11-95-216366-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19800404','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('gong2','공효진','1','010-5555-5555','인천시 부천구 부천로1','1종보통','11-95-216377-11','2025-12-31 23:59:59','2015-02-24 23:59:59','19800615','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('gong2','공효진','1','010-5555-5555','인천시 부천구 부천로1','1종보통','11-95-216377-11','2025-12-31 23:59:59','2015-02-24 23:59:59','19800615','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('haesu','김혜수','1','010-6666-6666','서울시 강남구 청담동','2종오토','11-95-216336-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19700905','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('han1','한효주','1','010-7777-7777','서울시 중구 약수동','1종오토','11-95-216377-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19870222','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('kim1','김래원','1','010-8888-8888','서울시 종로구 종로1가','1종대형','11-95-216388-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19810319','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('ma11','마동석','1','010-8888-8881','서울시 종로구 종로2가','1종대형','11-95-216389-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19710301','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('park','박신혜','1','010-7777-7772','서울시 중구 약수2동','1종오토','11-95-216778-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19900218','여');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('song','송중기','1','010-7777-7712','서울시 중구 약수3동','1종오토','11-95-216578-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19850919','남');
insert into member(id,name,pw,phone,address,license_type,license_num,expire_date,issue_date,birth,gender)
values('song1','송지효','1','010-7777-7713','서울시 중구 약수1동','2종보통','11-95-216798-12','2025-12-31 23:59:59','2015-02-24 23:59:59','19810815','여');
DROP VIEW member_customer;
CREATE OR REPLACE VIEW member_customer AS
SELECT 1 + (SELECT COUNT(*)
            FROM   customer t
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NOT NULL
            AND    t.role = 'CUSTOMER'
           ) as num
      ,c.title
      ,c.content
      ,c.reg_date
      ,c.customer_seq
      ,c.id
FROM   customer c
WHERE  c.id IS NOT NULL
AND    c.role = 'CUSTOMER'
;
DROP PROCEDURE IF EXISTS insert_customer;
-- INSERT_CUSTOMER
CREATE PROCEDURE insert_customer (IN sp_category VARCHAR(40),
                                  IN sp_title      VARCHAR(255),
                                  IN sp_content    TEXT,
                                  IN sp_file_name  VARCHAR(20),
                                  IN sp_reg_date   VARCHAR(20),
                                  IN sp_id         VARCHAR(20)
                                 )
BEGIN
  insert into customer(category,title,content,file_name,role,reg_date,id)
  values(sp_category,sp_title,sp_content,sp_file_name,'CUSTOMER',sp_reg_date,sp_id);
  commit;
END;
call insert_customer('예약/결제문의','딱 10분을 남겨두고 반납했어요. 바로반납 혜택이 제공이 되나요?','바로반납 혜택은 대여시간 30분 초과, 대여 종료시간 10분 이전 건에 대하여 적용됩니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)','','2016-10-09','bae1');
call insert_customer('예약/결제문의','바로반납 혜택이 아직 들어오지 않았어요!','바로반납 혜택은 지급되기까지 약 1시간정도 소요될 수 있습니다.단, 미결제 요금이 존재하는 경우 크레딧 제공이 보류될 수 있습니다.정상적으로 결제가 이루어졌으나 지급되지 않았다면 고객센터 1:1문의 혹은 쏘카톡으로 문의주세요.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)',
'reve.jpg','2016-10-06','bae1');
call insert_customer('예약/결제문의','편도나 D2D 서비스의 경우에도 바로반납 혜택이 적용되나요?','편도나 D2D와 같은 부가서비스 요금은 바로반납 혜택에 포함이 되지않습니다.다만, 해당 예약건의 대여요금은 위와 동일하게 바로반납 혜택 대상에 포함됩니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)',
'pay.jpg','2016-10-05','bae1');
call insert_customer('예약/결제문의','잔액부족으로 결제가 이루어지지 않은 경우에도 바로반납을 할 경우 혜택을 받을 수 있나요?','바로반납 시, 미결제요금이 있다면 바로반납 혜택 지급이 보류됩니다.단, 14일 이내에 미결제요금을 결제 완료되면 바로반납 혜택이 지급됩니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)',
'','2016-10-04','bewhy');
call insert_customer('예약/결제문의','바로반납으로 받은 혜택의 유효기간은 언제까지 인가요?','바로반납 크레딧의 유효기간은 지급된 시점으로부터 180일이며, 쿠폰의 경우 30일입니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)',
'','2016-10-03','bewhy');
call insert_customer('예약/결제문의','예약 앞당기기, 반납연장을 했어요. 이때 발생한 시간도 바로반납 혜택에 포함되나요?','네, 포함됩니다. 예약 앞당기기나 반납연장을 통해 실제 대여시간이 늘어났다면, 변경된 대여시작시간과 반납시간을 기준으로 혜택이 지급됩니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)',
'','2016-10-03','bewhy');
call insert_customer('가입문의','회원카드는 어떻게 구매할 수 있나요?','회원카드는 가입완료 후 모바일앱 마이페이지 > 내 정보 > 차량제어수단 > 추가 카드키 > 회원카드 신청 을 통해 구매하실 수 있습니다. ※ 회원카드 수령과 관계없이 가입승인 후 모바일앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.',
'','2016-10-02','bewhy');
call insert_customer('가입문의','회원카드는 언제, 어떻게 등록할 수 있나요?','구매한 회원카드를 수령하신 이후, 모바일앱 마이페이지 > 내 정보 > 차량제어수단 > 카드수정 에서 회원카드번호 7자리를 등록해주세요.※ 회원카드 수령과 관계없이 가입승인 후 모바일앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.',
'','2016-10-01','choi');
call insert_customer('가입문의','회원카드를 직접 방문수령하여 받을 수 있나요?','가능합니다! 사용 일정이 급하신 분들의 경우 스마트폰 앱으로 바로 이용 가능합니다. 회원카드 수령을 바로 원하는 경우 고객센터(1661-3315)로 연락 주시고, 쏘카 서울/제주 사무실로 오셔서 방문 수령하실 수 있습니다.',
'','2016-09-30','choi');
call insert_customer('가입문의','회원이 되려면 얼마나 걸리나요?','쏘카 홈페이지에서 회원 가입하시면, 회원님의 개인정보, 운전면허 정보, 신용카드 정보 등을 확인하는 과정을 거칩니다. 정보에 문제가 없는 경우 회원가입 1일 이내 쏘카 회원으로 승인됩니다.',
'','2016-09-29','choi');
call insert_customer('가입문의','연회비 제도가 있나요?','쏘카에서는 별도 연회비가 없이 모든 서비스를 이용하실 수 있습니다.※ 쏘카 SO회원에 한해 적용되던 연회비가 2014년 1월 9일 부로 무료화되었습니다. 대여요금 최대 70% 할인 등, SO회원 혜택은 그대로 유지됩니다. 회원제에 대해 궁금하신 사항은 고객센터(1661-3315)로 문의 부탁드립니다.',
'','2016-09-28','gong');
call insert_customer('가입문의','회원카드 배송은 언제 되나요?','회원카드 배송은 신청일로부터 주말/공휴일 제외 5~7일 정도 소요되며, 회원정보에 등록된 주소로 배송됩니다. 주소를 잘못 기입하여 반송되는 경우 추가 비용이 청구될 수 있으니, 반드시 우편물 수령이 가능한 주소를 입력해 주세요. ※ 회원카드 신청 후 한달 이상 경과하여도 카드를 받지 못하셨다면, 고객센터(1661-3315)로 별도 문의해 주세요. ※ 회원카드 수령과 관계없이 가입승인 후 모바일 앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.',
'','2016-09-27','gong');
call insert_customer('가입문의','가입절차가 어떻게 되나요?','회원가입은 쏘카 홈페이지 및 모바일웹/앱에서 가능합니다. 회원가입 시 실명인증 및 연락처, 이메일, 주소 등의 개인정보와 결제카드정보 및 운전면허 정보를 모두 입력해 주셔야 합니다. 회원가입을 완료하시면 입력하신 정보가 사실과 맞는지 검토하는 과정을 거쳐, 심사가 정상적으로 완료된 후부터 쏘카 예약 및 이용이 가능합니다.',
'','2016-09-26','gong');
call insert_customer('차량이용/사고','반납 체크 사항을 모두 처리하였는데도, 바로 반납 이 되지 않아요.','회원가입은 쏘카 홈페이지 및 모바일웹/앱에서 가능합니다. 회원가입 시 실명인증 및 연락처, 이메일, 주소 등의 개인정보와 결제카드정보 및 운전면허 정보를 모두 입력해 주셔야 합니다. 회원가입을 완료하시면 입력하신 정보가 사실과 맞는지 검토하는 과정을 거쳐, 심사가 정상적으로 완료된 후부터 쏘카 예약 및 이용이 가능합니다.',
'','2016-09-25','gong1');
call insert_customer('차량이용/사고','제주도 쏘카 셔틀버스 이용요금은 무료인가요?','네, 쏘친님들이 쏘카 스테이션으로 편하고 안전하게 이동하실 수 있도록 쏘카에서 제공하는 무료 서비스입니다. 운영 시간은 오전 8시부터 오후 8시까지 12시간이며, 30분 간격으로 운행합니다.',
'','2016-09-24','gong1');
call insert_customer('차량이용/사고','제주공항 쏘카 셔틀버스 운영시간 외에는 어떻게 제주 쏘카스테이션에 찾아가나요?','제주공항에서 대중교통을 이용하여 제주 쏘카 스테이션으로 이동이 가능합니다.버스: (신제주방면) 37번, 38번, 200번, 500번, 1002번(심야) 1003번(심야), 1009번(주말 심야) 　　　그레이스호텔 정류장 하차 (약 20분) -> 제주공항 방면 도보 이동 (약 5분)　택시: 연동 삼성전자 서비스센터 옆 라마다 앙코르 호텔 주차장 (약 7분소요)',
'','2016-09-23','gong1');
call insert_customer('차량이용/사고','제주공항에서 쏘카 셔틀버스를 어떻게 알아볼 수 있나요?','파란 셔틀버스에 쏘카 디자인이 되어 있는 버스가 쏘카 셔틀버스입니다. 제주공항 3층 2번게이트 쪽 버스 승하차장에서 대기하고 있는 파란색 쏘카 버스를 찾아주세요.',
'','2016-09-22','gong2');
call insert_customer('차량이용/사고','D2D 이용가능지역은 어디인가요?','2016년 9월, 서울 전지역에 서비스를 제공 중 입니다. 점진적으로 서비스 지역은 확대될 예정입니다.',
'','2016-09-21','gong2');
call insert_customer('차량이용/사고','D2D 이용 후 바로 반납이 되질 않습니다.','일단, 차량시동 OFF, 문잠금 상태인지 확인 및 차량 위치가 처음 대여 요청한 곳 인근 지역인지 다시금 확인해 주세요.D2D 예약의 경우 반납한 곳의 차량 위치에 대한 정보 및 사진을 기입을 해야만 바로반납이 됩니다.(반납시 입력한 위치 정보 및 사진은 차량을 다시 복귀하기 위해 찾는 정보로 활용 됩니다)간혹, 지하 주차장인 경우나 인근 빌딩 밀집 지역인 경우 위치 정보 확인이 어려울 수 있습니다.반납이 원할하지 않는 경우 1661-4665번(D2D 서비스전용)으로 문의바랍니다.※ D2D 예약이 아닌 일반 예약은 고객센터(1661-3315)로 문의바랍니다.',
'','2016-09-20','gong2');
call insert_customer('프로모션/쿠폰','쏘카존의 다양한 마커들은 어떤 의미인가요?','쏘카 예약 페이지의 각 마커들은 신규존 할인존 핫딜존 쏘떼차량이 있는 존 입니다. * 신규존은 쿠폰북에서 신규존 할인 쿠폰을 다운받아 적용하실 수 있습니다. * 핫딜존은 쏘카의 게릴라 할인존으로 쿠폰북에서 다운받으신 핫딜전용 할인쿠폰을 적용하실 수 있는 쏘카존입니다. 핫딜존은 주중 월~수요일 오후 3시 오픈됩니다.',
'','2016-09-20','haesu');
call insert_customer('프로모션/쿠폰','쿠폰적용을 하면 주행요금을 지불하지 않아도 되나요?','쿠폰은 대여요금에만 적용 가능하며 보험료, 주행요금 및 추가 연장요금 등 최초 대여요금 외 비용은 예약 시 선택한 결제카드로 결제가 됩니다.',
'','2016-09-19','haesu');
call insert_customer('프로모션/쿠폰','마이페이지에서는 보유쿠폰이 확인되나, 예약 시 적용이 되지 않습니다.','쿠폰은 각각 사용조건(주중/주말, 쏘카존 제한, 사용기간 제한 여부 등)이 있기 때문에, 예약을 원하시는 일정에 사용 가능한 쿠폰인지, 사용조건을 다시 한번 확인해주세요!',
'','2016-09-18','haesu');
call insert_customer('프로모션/쿠폰','이미 등록된 쿠폰을 다른 사람에게 양도할 수 있나요?','이미 회원님 계정에 등록이 된 쿠폰은 양도가 불가합니다.',
'','2016-09-18','han1');
call insert_customer('프로모션/쿠폰','쿠폰을 적용하여 예약하였습니다. 예약을 취소하면 쿠폰도 함께 삭제되나요?','쿠폰의 유효기간 내, 쿠폰이 적용된 예약을 취소하시면 쿠폰은 다시 재발급이 된답니다.',
'','2016-09-17','han1');
call insert_customer('프로모션/쿠폰','예약 후 연장을 하려 합니다. 연장시간에 쿠폰적용이 가능한가요?','쿠폰은 최초 예약 시 차량 대여요금에만 적용이 가능합니다. 연장하시는 경우에는 쿠폰적용이 불가능합니다.',
'','2016-09-16','han1');
call insert_customer('법인/단체','법인/단체 가입시 보증금 또는 연회비 등 비용이 드나요?','카셰어링은 회원제로 운영되는 자동차 공유 서비스입니다. 시내의 주요 공영주차장 등 곳곳에 주차된 공유 차량을 필요할 때 언제든 예약하고 사용한 만큼의 비용만 결제하시면 됩니다. 따라서 보증금 또는 연회비가 없으며 물론 계약서도 없습니다.',
'','2016-09-15','kim1');
call insert_customer('법인/단체','법인/단체 관리자와 법인 구성원의 차이점이 뭔가요?','법인/단체 회원은 “관리자”와 “구성원”으로 나뉘며, 관리자는 구성원 가입 승인 및 이용내역 조회를 할 수 있습니다. 구성원은 관리자 승인 후 개인회원과 동일한 프로세스로 이용하게 됩니다.',
'','2016-09-14','kim1');
call insert_customer('법인/단체','법인/단체 관리자 계정 등록 후 차량 이용 및 예약이 바로 가능한가요?','법인/단체 관리자 계정은 소속 직원 초대 및 이용 관리를 위한 계정으로, 차량 이용 및 예약을 위해서는 해당 법인/단체 구성원으로 별도의 가입이 가입이 필요합니다.',
'','2016-09-13','kim1');
call insert_customer('법인/단체','관리자가 구성원으로 등록할 경우 동일한 아이디로 가입 및 차량 이용 가능한가요?','관리자 계정은 별도의 관리계정으로, 구성원 계정과 구분하기 위해 별도의 아이디가 필요합니다. 다만 아이디를 제외한 다른 가입자 정보는 동일하게 사용 가능합니다.',
'','2016-09-12','ma11');
call insert_customer('법인/단체','대표카드 결제와 개인카드 결제의 차이점이 뭔가요?','대표결제는 소속 구성원 전체가 동일한 결제카드를 사용해 결제하며 구성원 개인결제는 각 소속 구성원이 직접 등록한 개별 결제카드로 결제합니다.이때 개별 결제카드는 개인카드와 법인카드 모두 사용 가능하며 1인당 3장까지 등록해두고 쓸 수 있습니다.',
'','2016-09-11','ma11');
call insert_customer('법인/단체','개인사업자도 법인 회원으로 가입하여 법인만의 특혜 서비스를 받을 수 있나요?','네! 쏘카 법인 프로그램은 업무용 차량 이용을 위한 것으로, 개인사업자도 법인 회원으로 가입해 법인 특혜 서비스를 동일하게 받을 수 있습니다.',
'','2016-09-10','ma11');
call insert_customer('탈퇴','탈퇴 시 보유한 크레딧은 환불이 되나요?','회사가 무상으로 부여한 크레딧은 환불되지 않습니다. 3개월 후 재가입을 하셔도 다시 생성되지 않습니다. 단, 유상으로 구매하신 크레딧은 규정에 따라 환불됩니다.',
'','2016-09-10','park');
call insert_customer('탈퇴','탈퇴 시 재가입이 가능한가요?','탈퇴 시 3개월간 재가입이 제한됩니다. 아이디/이름 변경 등이 필요한 경우에는 고객센터로 문의주세요.',
'','2016-09-09','park');
call insert_customer('탈퇴','탈퇴를 하려면 어떻게 해야 하나요?','쏘카 PC 홈페이지 로그인 후, 마이페이지>내정보 하단의 탈퇴하기 버튼을 클릭하여, 탈퇴를 요청해주세요. 관리자가 미납 요금 및 환불 금액을 확인한 후 탈퇴를 처리해 드립니다.※ 모바일에서는 탈퇴 기능이 제공되지 않습니다. PC 홈페이지를 이용해 주세요.[!] 회원 탈퇴 시에는 아래의 주의 사항을 반드시 확인해주세요!1) 탈퇴 시 3개월간 재가입이 제한됩니다. 아이디/이름 변경 등이 필요한 경우에는 고객센터로 문의해주세요.2) 탈퇴 시 회사가 무상으로 부여한 크레딧은 환불되지 않으며, 3개월 후 재가입을 하셔도 다시 생성되지 않습니다. 단, 유상으로 구매하신 크레딧은 규정에 따라 환불해 드립니다.',
'','2016-09-13','park');
call insert_customer('기타','프로필 사진은 어떻게 변경하나요?','프로필 사진은 쏘친님께서 쏘카에 연동하신 SNS계정의 프로필 사진이 자동 연결되어 노출됩니다.따라서 쏘카 프로필 사진을 변경하시려면, 1. 연동하신 SNS계정의 프로필 사진을 변경하시고 2. 쏘카 앱 내정보 > SNS계정 연동정보에서 연동을 해제하신 후 다시 연동해주셔야 합니다.혹시 그래도 프로필 사진이 쏘카 앱에 적용되지 않는 경우에는, 1. 사용 중이신 OS와 쏘카 앱을 최신버전으로 업데이트 하시고 2. 쏘카 앱, 그리고 SNS를 로그아웃 하신 후 다시 로그인 해주세요.',
'','2016-09-08','sana');
call insert_customer('기타','세차가 하고 싶어요! 어떻게 해야하나요?','이용 중 세차가 하고 싶으신가요? 자비부담으로 세차 진행 시 1만 크레딧으로 리워드 해드립니다. 이용 중인 차량의 스마트키 > 추가 기능 사용하기 > 세차 인증 메뉴에서 세차 전후 사진을 촬영하여 남겨주세요!※ 담당자 확인 후 크레딧 지급까지 3~4일이 소요됩니다.자세한 사항은 아래 링크를 참고하세요. ☞ 세차리워드 안내 자세히 보기 (PC)',
'','2016-09-07','sana');
call insert_customer('기타','회원카드 배송은 언제 되나요?','회원카드 배송은 신청일로부터 주말/공휴일 제외 5~7일 정도 소요되며, 회원정보에 등록된 주소로 배송됩니다. 주소를 잘못 기입하여 반송되는 경우 추가 비용이 청구될 수 있으니, 반드시 우편물 수령이 가능한 주소를 입력해 주세요. ※ 회원카드 신청 후 한달 이상 경과하여도 카드를 받지 못하셨다면, 고객센터(1661-3315)로 별도 문의해 주세요. ※ 회원카드 수령과 관계없이 가입승인 후 모바일앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.',
'','2016-09-06','sana');
call insert_customer('기타','주변에 쏘카존이 없어서 이용이 불편합니다. 요청은 어떻게 하나요?','원하시는 쏘카존이 있는 경우 자세한 위치 및 쏘카존이 생겼으면 하는 이유를 [쏘카 앱] 고객센터 > 쏘카존 신청하기를 통해 알려주시면 의견을 수렴해 쏘카존을 마련해 나가도록 하겠습니다. 또는, Door to Door(D2D) 서비스를 이용하시면 원하는 위치로 쏘카가 배차되어 바로 차량 이용이 가능합니다.',
'','2016-09-05','song1');
call insert_customer('기타','회원카드를 분실하면 어떻게 하나요?','회원카드 분실 시에는 마이페이지 > 내 정보 > 차량제어수단 > 추가 카드키 에서 재발급 신청을 해주세요. 재발급 비용은 1,500원입니다.안내사항- 회원카드가 반송되는 경우, 반송 및 재발송 비용은 본인 부담입니다.※ 회원카드 수령과 관계없이 가입승인 후 모바일앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.',
'','2016-09-04','song1');
DROP PROCEDURE IF EXISTS update_customer;
-- UPDATE_CUSTOMER
CREATE PROCEDURE update_customer (IN sp_answer       TEXT,
                                  IN sp_customer_seq BIGINT
                                 )
BEGIN
  update customer
  SET    answer = ifnull(sp_answer,answer)
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
DROP PROCEDURE IF EXISTS delete_customer;
-- DELETE_CUSTOMER
CREATE PROCEDURE delete_customer (IN sp_customer_seq BIGINT
                                 )
BEGIN
  delete
  from   customer
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
/*
================ CAR_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 차량
=====================================
*/
DROP TABLE IF EXISTS car;
CREATE TABLE CAR(
CAR_NUM     VARCHAR(20) NOT NULL PRIMARY KEY, /* 차량_번호 */
CAR_TYPE    VARCHAR(40) NOT NULL, /* 차량_종류 */
OIL_TYPE    VARCHAR(20) NOT NULL, /* 유류_종류 */
CAR_OPTION      VARCHAR(255), /* 차량 옵션 */
SOCAR_ZONE  VARCHAR(255) NOT NULL, /* 쏘카_존 */
RENT_AMT    INT          NOT NULL, /* 대여_요금 */
DRIVE_AMT   INT          NOT NULL  /* 주행_요금 */
);
DROP PROCEDURE IF EXISTS insert_car;
-- INSERT_CAR
CREATE PROCEDURE insert_car (IN sp_car_num    VARCHAR(20),
                             IN sp_car_type   VARCHAR(40),
                             IN sp_oil_type   VARCHAR(20),
                             IN sp_car_option VARCHAR(255),
                             IN sp_socar_zone VARCHAR(255),
                             IN sp_rent_amt   INT,
                             IN sp_drive_amt  INT,
                             IN sp_car_img    VARCHAR(20)
                            )
BEGIN
  insert into car(car_num,car_type,oil_type,car_option,socar_zone,rent_amt,drive_amt,car_img)
  values(sp_car_num,sp_car_type,sp_oil_type,sp_car_option,sp_socar_zone,sp_rent_amt,sp_drive_amt,sp_car_img);
  commit;
END;
call insert_car('11너1234','삼성520','LPG','ABS,듀얼에어백,오토,네비게이션','증산시장앞',3000,130,'520.jpg');
call insert_car('11가1234','아반떼AD 계반떼','휘발유','오토변속기어,내비게이션,블랙박스','증산시장앞',2620,170,'avantad.jpg');
call insert_car('11다1244','엑센트 크레센도','휘발유','오토변속기어,내비게이션,블랙박스','증산시장앞',2390,170,'accent.jpg');
call insert_car('12라2233','레디 다우니','휘발유','오토변속기어,내비게이션,블랙박스','증산시장앞',2130,170,'reydauni.jpg');
call insert_car('12마3333','레디 이촌둥이','휘발유','오토변속기어,내비게이션,블랙박스','이촌역 4번출구',2130,170,'reyleechon.jpg');
call insert_car('55가1111','아반떼AD','휘발유','오토변속기어,내비게이션,블랙박스','서강대역 2번출구',2620,170,'avant1.jpg');
call insert_car('55라2233','레디 레이서','휘발유','오토변속기어,내비게이션,블랙박스','서강대역 2번출구',2130,170,'reyreyser.jpg');
call insert_car('66하4568','K3헤리오스','휘발유','오토변속기어,내비게이션,블랙박스','서강대역 2번출구',2140,170,'k3hellryos.jpg');
call insert_car('46가5656','아반떼AD','휘발유','오토변속기어,내비게이션,블랙박스','서강대역 2번출구',2620,170,'avant2.jpg');
call insert_car('15카8989','말리부','휘발유','오토변속기어,내비게이션,블랙박스','신촌역 4번출구',3310,180,'malibu1.jpg');
call insert_car('25파2323','K3 스파클링','휘발유','오토변속기어,내비게이션,블랙박스','신촌역 4번출구',2140,170,'K3spacling.jpg');
call insert_car('35크3323','아반떼AD','휘발유','오토변속기어,내비게이션,블랙박스','신촌역 4번출구',2620,170,'avant3.jpg');
call insert_car('45바4545','아반떼AD','휘발유','오토변속기어,내비게이션,블랙박스','신촌역 4번출구',2620,170,'avant4.jpg');
DROP PROCEDURE IF EXISTS update_car;
-- UPDATE_CUSTOMER
CREATE PROCEDURE update_car (IN sp_car_option   VARCHAR(255),
                             IN sp_socar_zone   VARCHAR(255),
                             IN sp_rent_amt     INT,
                             IN sp_drive_amt    INT,
                             IN sp_car_num      VARCHAR(20)
                            )
BEGIN
  update car
  SET    car_option     = ifnull(sp_car_option,car_option),
         car_socar_zone = ifnull(sp_socar_zone,socar_zone),
         rent_amt       = IFNULL(sp_rent_amt, rent_amt),
         drive_amt      = IFNULL(sp_drive_amt, drive_amt)
  WHERE  car_num        = sp_car_num
  ;
  commit;
END;
DROP PROCEDURE IF EXISTS delete_car;
-- DELETE_CUSTOMER
CREATE PROCEDURE delete_car (IN sp_car_num VARCHAR(20)
                            )
BEGIN
  delete
  from   car
  WHERE  car_num = sp_car_num
  ;
  commit;
END;