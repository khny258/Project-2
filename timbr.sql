DROP DATABASE IF EXISTS timbr_db;
CREATE DATABASE timbr_db;
USE timbr_db;

CREATE TABLE timbr_user (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id), 
f_name VARCHAR(30) NOT NULL, 
l_name VARCHAR(30) NOT NULL, 
email VARCHAR(50) NOT NULL,
birthday VARCHAR(30) NOT NULL,
gender_identity VARCHAR(30),
gender_of_partner VARCHAR(30),



password VARCHAR(12) NOT NULL,
liked_genres VARCHAR(30) 
disliked_genres VARCHAR(30)
);

CREATE TABLE genre_preferences (
user_id INT UNSIGNED NOT NULL,
INDEX user_ind (user_id),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES timbr_user (id) ON DELETE SET NULL,
hip_hop BOOLEAN DEFAULT false,
pop BOOLEAN DEFAULT false,
country BOOLEAN DEFAULT false,
r_b BOOLEAN DEFAULT false,
latin BOOLEAN DEFAULT false,
rock BOOLEAN DEFAULT false,
dance_electronic BOOLEAN DEFAULT false,
indie BOOLEAN DEFAULT false,
folk_acoustic BOOLEAN DEFAULT false,
classical BOOLEAN DEFAULT false,
jazz BOOLEAN DEFAULT false,
soul BOOLEAN DEFAULT false,
christian BOOLEAN DEFAULT false,
k_pop BOOLEAN DEFAULT false,
arab BOOLEAN DEFAULT false,
desi BOOLEAN DEFAULT false,
afro BOOLEAN DEFAULT false,
metal BOOLEAN DEFAULT false,
regional_mexican BOOLEAN DEFAULT false,
reggae BOOLEAN DEFAULT false,
blues BOOLEAN DEFAULT false,
punk BOOLEAN DEFAULT false,
funk BOOLEAN DEFAULT false
);

CREATE TABLE user_instruments (
user_id INT UNSIGNED NOT NULL,
INDEX user_ind (user_id),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES timbr_user (id) ON DELETE SET NULL,
Brass BOOLEAN DEFAULT false, 
Trumpet BOOLEAN DEFAULT false, 
Cornet BOOLEAN DEFAULT false, 
Trombone BOOLEAN DEFAULT false, 
Baritone_Horn BOOLEAN DEFAULT false, 
French Horn BOOLEAN DEFAULT false, 
Saxaphone BOOLEAN DEFAULT false, 
Sousaphone BOOLEAN DEFAULT false, 
Tuba BOOLEAN DEFAULT false, 
Wagner Tuba BOOLEAN DEFAULT false, 
Percussion BOOLEAN DEFAULT false, 
Triangle BOOLEAN DEFAULT false, 
Timpani BOOLEAN DEFAULT false, 
Xylophone BOOLEAN DEFAULT false, 
Vibraphone BOOLEAN DEFAULT false, 
Marimba BOOLEAN DEFAULT false, 
Tubular_Bells BOOLEAN DEFAULT false, 
Glockenspiel BOOLEAN DEFAULT false, 
Celesta BOOLEAN DEFAULT false, 
Bass_Drum BOOLEAN DEFAULT false, 
Snare_Drum BOOLEAN DEFAULT false, 
Wood_Block BOOLEAN DEFAULT false, 
Whip_Block BOOLEAN DEFAULT false, 
Ratchet BOOLEAN DEFAULT false, 
Cymbals BOOLEAN DEFAULT false, 
Strings BOOLEAN DEFAULT false, 
Violin BOOLEAN DEFAULT false, 
Viola BOOLEAN DEFAULT false, 
Cello BOOLEAN DEFAULT false, 
Bass BOOLEAN DEFAULT false, 
Harp BOOLEAN DEFAULT false, 
Guitar BOOLEAN DEFAULT false, 
Viol_de_gamba BOOLEAN DEFAULT false, 
Theorbo BOOLEAN DEFAULT false, 
Woodwinds BOOLEAN DEFAULT false, 
Piccolo BOOLEAN DEFAULT false, 
Flute BOOLEAN DEFAULT false, 
Clarinet BOOLEAN DEFAULT false, 
Oboe BOOLEAN DEFAULT false, 
Bass_Clarinet BOOLEAN DEFAULT false, 
Bassoon BOOLEAN DEFAULT false, 
Contrabassoon BOOLEAN DEFAULT false, 
Bagpipe BOOLEAN DEFAULT false, 
Harmonica BOOLEAN DEFAULT false, 
Keyboard BOOLEAN DEFAULT false, 
Piano BOOLEAN DEFAULT false, 
Harpsichord BOOLEAN DEFAULT false, 
Clavichord BOOLEAN DEFAULT false, 
Accordion BOOLEAN DEFAULT false, 
Celesta BOOLEAN DEFAULT false, 
Harmonium BOOLEAN DEFAULT false, 
Voice BOOLEAN DEFAULT false, 
Soprano BOOLEAN DEFAULT false, 
Mezzo_Soprano BOOLEAN DEFAULT false, 
Contralto BOOLEAN DEFAULT false, 
Countertenor BOOLEAN DEFAULT false, 
Tenor BOOLEAN DEFAULT false, 
Baritone BOOLEAN DEFAULT false, 
Bass_voice BOOLEAN DEFAULT false, 

password VARCHAR(12) NOT NULL,
liked_genres VARCHAR(30) 
disliked_genres VARCHAR(30)
);

INSERT INTO timbr_user (f_name, l_name, email, birthday, gender_identity, gender_of_partner)
values ("John", "Wayne ", "myron.schumm@cormier.com", "8/27/1938", "male", "female")
values ("Peter", "Oneal", "reilly.jordane@ryan.biz", "5/18/1940", "female", "male")
values ("Garry", "Stuart", "savannah.quitzon@wolf.com", "1/10/1941", "female", "male")
values ("Leslie", "Mills", "oreichert@romaguera.com", "10/6/1941", "male", "female")
values ("Jacob", "Brooks", "kkovacek@hotmail.com", "12/17/1944", "female", "male")
values ("Daniel", "Hines", "bins.rosalee@gmail.com", "10/29/1950", "male", "female")
values ("Alex", "Chandler", "ruth04@ohara.info", "3/29/1952", "female", "male")
values ("Ryan", "Sanders", "fidel59@stoltenberg.net", "7/15/1952", "male", "female")
values ("Christopher", "Harmony ", "oconnell.virginia@goyette.org", "2/23/1953", "female", "male")
values ("Aaron", "Moss", "mbeier@gmail.com", "5/15/1959", "male", "female")
values ("Michael", "Flowers", "emerald30@yahoo.com", "10/1/1955", "female", "male")
values ("Adam", "Joker", "green.rachel@gaylord.com", "11/1/1972", "male", "female")
values ("Harry", "Lecter", "hyman.reichert@doyle.com", "3/12/1976", "female", "male")
values ("Anthony", "Sauron", "pwalker@botsford.com", "4/5/1977", "male", "female")
values ("Sebastian", "Bane", "dimitri50@crooks.com", "4/22/1977", "female", "male")
values ("Darren", "Smith", "feeney.kraig@gmail.com", "6/5/1980", "male", "female")
values ("Luke", "Norton", "oglover@yahoo.com", "10/4/1980", "female", "male")
values ("Sam", "Durden", "tyree59@bartoletti.org", "12/9/1980", "male", "female")
values ("Melba", "Butler", "bridget.waelchi@gmail.com", "5/14/1990", "female", "male")
values ("Cesar", "Guzman", "xkrajcik@gmail.com", "5/14/1990", "female", "male")
values ("Lorena", "Mccoy", "hermiston.marlen@gmail.com", "5/14/1990", "female", "male")
values ("Irma", "Carr", "russ.hermiston@gmail.com", "5/14/1990", "female", "male")
values ("Ed", "Hopkins", "sarina.dibbert@waters.info", "5/14/1990", "female", "male")
values ("Verna", "Schwartz", "jjaskolski@bahringer.com", "5/14/1990", "gay", "gay")
values ("Felix", "Hubbard", "ernesto.prohaska@yahoo.com", "5/14/1990", "gay", "gay")
values ("Jimmie", "Hanson", "jgulgowski@hane.info", "5/14/1990", "gay", "gay")
values ("Homer", "Dixon", "domenic65@gmail.com", "5/14/1990", "gay", "gay")
values ("Lionel", "Mendoza", "augustine90@green.org", "5/14/1990", "gay", "gay")