import React, { useState, useEffect } from "react";
import "../../App.css";
import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img3.jpg";
import Navbarclinique from "../accueil/menu";

export default function Gallery() {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");

  const [showInfo, setShowInfo] = useState(false);
  const [showExam, setShowExam] = useState(false);

  const services = [
    {
      id: 1, title: "LES ACTES MEDICAUX", image: img11, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Echographie pelvienne" }, { id: 3, name: "Echographie abdominale" }, { id: 4, name: "Echographie Testiculaire" }, { id: 5, name: "Echographie des parties molles" }, { id: 6, name: "Echographie prostatique" }, { id: 7, name: "Echographie des seins" }, { id: 8, name: "Echographie fontanelle" }, { id: 9, name: "Echographie cervicale" }, { id: 10, name: "Surveillance de la grossesse (CPN" }, { id: 11, name: "Accouchement" }, { id: 12, name: "Chlamydiae" }, { id: 13, name: "Hydrotubatio" }, { id: 14, name: "GERF" }, { id: 15, name: "Selles" }, { id: 16, name: "Frottis sanguin" }, { id: 17, name: "GERF" }, { id: 18, name: "NFS" }, { id: 19, name: "VS" }, { id: 20, name: "T.E" }, { id: 21, name: "ECBU" }, { id: 22, name: "PV" }, { id: 23, name: "BW" }, { id: 24, name: "Hémogramme" }, { id: 25, name: "Cytogramme culture" }, { id: 26, name: "Spermogramme culture" }, { id: 27, name: "Hemoculture" }, { id: 28, name: "Microalbuminurie" }, { id: 29, name: "Prolactinimie" }, { id: 30, name: "VDRL" }, { id: 31, name: "Dosage prolactine" }, { id: 32, name: "Testostérone" }, { id: 33, name: "spermoculture" }, { id: 34, name: "PV+ Mycoplasme" }, { id: 35, name: "TP/INR" }, { id: 36, name: "SDWF" }, { id: 37, name: "Glycémie" }, { id: 38, name: "magnésemie" }, { id: 40, name: "albuminerie" }, { id: 41, name: "glucosurie" }, { id: 42, name: "Glaire cervicale " }, { id: 43, name: "TPC" }, { id: 44, name: "Spermogramme " }, { id: 45, name: "spermocytogramme" }, { id: 46, name: "Hospitalisation/jour" }, { id: 47, name: "aslo" }, { id: 48, name: "Taux reticulocyte" }, { id: 49, name: "Charge virale " }, { id: 50, name: "Taux de CD4 " }, { id: 51, name: "Hormones Thyroidiens T3" }, { id: 52, name: "Hormones Thyroidiens T4" }, { id: 53, name: "Hormones Thyroidiens TSH" }, { id: 54, name: "Kaliemie" }, { id: 55, name: "fistulographie" }, { id: 56, name: "Serologie toxo" }, { id: 57, name: "Serologie rubeole" }, { id: 58, name: "Serologie sphylitique" }, { id: 59, name: "GERH+Frottis" }, { id: 60, name: "Urotro- cystoscopie" }, { id: 61, name: "galactographie" }, { id: 62, name: "pyoculture" }, { id: 63, name: "ETF" }, { id: 64, name: "AC-anti-AVC" }, { id: 65, name: "Dosage d’oestradial" }, { id: 66, name: "AMH" }, { id: 67, name: "Serologie siphilis" }, { id: 68, name: "NFS + réticulocyte" }, { id: 69, name: "Dosage beta HCG" }, { id: 70, name: "Uroculture simple" }, { id: 71, name: "créatinemie" }, { id: 72, name: "Copro-culture" }, { id: 73, name: "Copro-culture+ATB" }, { id: 74, name: "Cholestéroe tota" }, { id: 75, name: "Triglycéride" }, { id: 76, name: "Uricémie ( acide urique)" }, { id: 77, name: "Azotémie( urée)" }, { id: 78, name: "transaminases" }, { id: 79, name: "Protéines totale" }, { id: 80, name: "amylase" }, { id: 81, name: "Albumine" }, { id: 82, name: "ALP" }, { id: 83, name: "bilirubine" }, { id: 84, name: "calcium" }, { id: 85, name: "chlore" }, { id: 86, name: "CPK" }, { id: 87, name: "Gama GT" }, { id: 88, name: "Potassium" }, { id: 89, name: "sodium" }, { id: 90, name: "PV mycoplasme" }, { id: 91, name: "Serologie chlamydia" }, { id: 92, name: "toxoplasmose" }, { id: 93, name: "Rubeole " }, { id: 94, name: "TS" }, { id: 96, name: "TCK" }, { id: 97, name: "TP/INR" }, { id: 98, name: "TC" }, { id: 99, name: "PCA" }, { id: 100, name: "BHCG plasmatiques" }, { id: 101, name: "PV+ATB" }, { id: 102, name: "ECBU+ATB" }, { id: 103, name: "Spermogramme +ATB" }, { id: 104, name: "coproculture" }, { id: 105, name: "T3" }, { id: 106, name: "T4" }, { id: 107, name: "FSH" }, { id: 108, name: "oestradial" }, { id: 109, name: "progesterone" }, { id: 110, name: "Bilurbine directe" }, { id: 111, name: "Bilurbnine indirect" }, { id: 112, name: "HDL" }, { id: 113, name: "LDL " }, { id: 114, name: "CRP" }, { id: 115, name: "magnesemie" }, { id: 116, name: "prolactinemie" }, { id: 117, name: "TPHA" }, { id: 118, name: "Ag-HBS" }, { id: 119, name: "HBA1C" }, { id: 120, name: "Hépatite C" }, { id: 121, name: "Hépatite B" }, { id: 122, name: "Facteurs rhumatoides" }, { id: 123, name: "serologie H pylori " }, { id: 124, name: "Ig-e" }, { id: 125, name: "Hemogramme complet" }, { id: 126, name: "Electrophorese HB" }, { id: 127, name: "Echo-doppler" }, { id: 128, name: "D-Divers" }, { id: 129, name: "F.R" }, { id: 130, name: "TE" }, { id: 131, name: "GRSH" }, { id: 132, name: "EHB" }, { id: 133, name: "SRV" },]
    },


    {
      id: 2, title: "SERVICE DE RADIOLOGIE : NUMERIQUE", image: img22, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },]
    },



    {
      id: 3, title: "Dermatologie", image: img33, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "" }, { id: 2, name: "Photothérapie" }]
    },
    {
      id: 1, title: "LES ACTES MEDICAUX", image: img11, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Echographie pelvienne" }, { id: 3, name: "Echographie abdominale" }, { id: 4, name: "Echographie Testiculaire" }, { id: 5, name: "Echographie des parties molles" }, { id: 6, name: "Echographie prostatique" }, { id: 7, name: "Echographie des seins" }, { id: 8, name: "Echographie fontanelle" }, { id: 9, name: "Echographie cervicale" }, { id: 10, name: "Surveillance de la grossesse (CPN" }, { id: 11, name: "Accouchement" }, { id: 12, name: "Chlamydiae" }, { id: 13, name: "Hydrotubatio" }, { id: 14, name: "GERF" }, { id: 15, name: "Selles" }, { id: 16, name: "Frottis sanguin" }, { id: 17, name: "GERF" }, { id: 18, name: "NFS" }, { id: 19, name: "VS" }, { id: 20, name: "T.E" }, { id: 21, name: "ECBU" }, { id: 22, name: "PV" }, { id: 23, name: "BW" }, { id: 24, name: "Hémogramme" }, { id: 25, name: "Cytogramme culture" }, { id: 26, name: "Spermogramme culture" }, { id: 27, name: "Hemoculture" }, { id: 28, name: "Microalbuminurie" }, { id: 29, name: "Prolactinimie" }, { id: 30, name: "VDRL" }, { id: 31, name: "Dosage prolactine" }, { id: 32, name: "Testostérone" }, { id: 33, name: "spermoculture" }, { id: 34, name: "PV+ Mycoplasme" }, { id: 35, name: "TP/INR" }, { id: 36, name: "SDWF" }, { id: 37, name: "Glycémie" }, { id: 38, name: "magnésemie" }, { id: 40, name: "albuminerie" }, { id: 41, name: "glucosurie" }, { id: 42, name: "Glaire cervicale " }, { id: 43, name: "TPC" }, { id: 44, name: "Spermogramme " }, { id: 45, name: "spermocytogramme" }, { id: 46, name: "Hospitalisation/jour" }, { id: 47, name: "aslo" }, { id: 48, name: "Taux reticulocyte" }, { id: 49, name: "Charge virale " }, { id: 50, name: "Taux de CD4 " }, { id: 51, name: "Hormones Thyroidiens T3" }, { id: 52, name: "Hormones Thyroidiens T4" }, { id: 53, name: "Hormones Thyroidiens TSH" }, { id: 54, name: "Kaliemie" }, { id: 55, name: "fistulographie" }, { id: 56, name: "Serologie toxo" }, { id: 57, name: "Serologie rubeole" }, { id: 58, name: "Serologie sphylitique" }, { id: 59, name: "GERH+Frottis" }, { id: 60, name: "Urotro- cystoscopie" }, { id: 61, name: "galactographie" }, { id: 62, name: "pyoculture" }, { id: 63, name: "ETF" }, { id: 64, name: "AC-anti-AVC" }, { id: 65, name: "Dosage d’oestradial" }, { id: 66, name: "AMH" }, { id: 67, name: "Serologie siphilis" }, { id: 68, name: "NFS + réticulocyte" }, { id: 69, name: "Dosage beta HCG" }, { id: 70, name: "Uroculture simple" }, { id: 71, name: "créatinemie" }, { id: 72, name: "Copro-culture" }, { id: 73, name: "Copro-culture+ATB" }, { id: 74, name: "Cholestéroe tota" }, { id: 75, name: "Triglycéride" }, { id: 76, name: "Uricémie ( acide urique)" }, { id: 77, name: "Azotémie( urée)" }, { id: 78, name: "transaminases" }, { id: 79, name: "Protéines totale" }, { id: 80, name: "amylase" }, { id: 81, name: "Albumine" }, { id: 82, name: "ALP" }, { id: 83, name: "bilirubine" }, { id: 84, name: "calcium" }, { id: 85, name: "chlore" }, { id: 86, name: "CPK" }, { id: 87, name: "Gama GT" }, { id: 88, name: "Potassium" }, { id: 89, name: "sodium" }, { id: 90, name: "PV mycoplasme" }, { id: 91, name: "Serologie chlamydia" }, { id: 92, name: "toxoplasmose" }, { id: 93, name: "Rubeole " }, { id: 94, name: "TS" }, { id: 96, name: "TCK" }, { id: 97, name: "TP/INR" }, { id: 98, name: "TC" }, { id: 99, name: "PCA" }, { id: 100, name: "BHCG plasmatiques" }, { id: 101, name: "PV+ATB" }, { id: 102, name: "ECBU+ATB" }, { id: 103, name: "Spermogramme +ATB" }, { id: 104, name: "coproculture" }, { id: 105, name: "T3" }, { id: 106, name: "T4" }, { id: 107, name: "FSH" }, { id: 108, name: "oestradial" }, { id: 109, name: "progesterone" }, { id: 110, name: "Bilurbine directe" }, { id: 111, name: "Bilurbnine indirect" }, { id: 112, name: "HDL" }, { id: 113, name: "LDL " }, { id: 114, name: "CRP" }, { id: 115, name: "magnesemie" }, { id: 116, name: "prolactinemie" }, { id: 117, name: "TPHA" }, { id: 118, name: "Ag-HBS" }, { id: 119, name: "HBA1C" }, { id: 120, name: "Hépatite C" }, { id: 121, name: "Hépatite B" }, { id: 122, name: "Facteurs rhumatoides" }, { id: 123, name: "serologie H pylori " }, { id: 124, name: "Ig-e" }, { id: 125, name: "Hemogramme complet" }, { id: 126, name: "Electrophorese HB" }, { id: 127, name: "Echo-doppler" }, { id: 128, name: "D-Divers" }, { id: 129, name: "F.R" }, { id: 130, name: "TE" }, { id: 131, name: "GRSH" }, { id: 132, name: "EHB" }, { id: 133, name: "SRV" },]
    },


    {
      id: 2, title: "SERVICE DE RADIOLOGIE : NUMERIQUE", image: img22, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },]
    },



    {
      id: 3, title: "Dermatologie", image: img33, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "" }, { id: 2, name: "Photothérapie" }]
    },
    {
      id: 1, title: "LES ACTES MEDICAUX", image: img11, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Echographie pelvienne" }, { id: 3, name: "Echographie abdominale" }, { id: 4, name: "Echographie Testiculaire" }, { id: 5, name: "Echographie des parties molles" }, { id: 6, name: "Echographie prostatique" }, { id: 7, name: "Echographie des seins" }, { id: 8, name: "Echographie fontanelle" }, { id: 9, name: "Echographie cervicale" }, { id: 10, name: "Surveillance de la grossesse (CPN" }, { id: 11, name: "Accouchement" }, { id: 12, name: "Chlamydiae" }, { id: 13, name: "Hydrotubatio" }, { id: 14, name: "GERF" }, { id: 15, name: "Selles" }, { id: 16, name: "Frottis sanguin" }, { id: 17, name: "GERF" }, { id: 18, name: "NFS" }, { id: 19, name: "VS" }, { id: 20, name: "T.E" }, { id: 21, name: "ECBU" }, { id: 22, name: "PV" }, { id: 23, name: "BW" }, { id: 24, name: "Hémogramme" }, { id: 25, name: "Cytogramme culture" }, { id: 26, name: "Spermogramme culture" }, { id: 27, name: "Hemoculture" }, { id: 28, name: "Microalbuminurie" }, { id: 29, name: "Prolactinimie" }, { id: 30, name: "VDRL" }, { id: 31, name: "Dosage prolactine" }, { id: 32, name: "Testostérone" }, { id: 33, name: "spermoculture" }, { id: 34, name: "PV+ Mycoplasme" }, { id: 35, name: "TP/INR" }, { id: 36, name: "SDWF" }, { id: 37, name: "Glycémie" }, { id: 38, name: "magnésemie" }, { id: 40, name: "albuminerie" }, { id: 41, name: "glucosurie" }, { id: 42, name: "Glaire cervicale " }, { id: 43, name: "TPC" }, { id: 44, name: "Spermogramme " }, { id: 45, name: "spermocytogramme" }, { id: 46, name: "Hospitalisation/jour" }, { id: 47, name: "aslo" }, { id: 48, name: "Taux reticulocyte" }, { id: 49, name: "Charge virale " }, { id: 50, name: "Taux de CD4 " }, { id: 51, name: "Hormones Thyroidiens T3" }, { id: 52, name: "Hormones Thyroidiens T4" }, { id: 53, name: "Hormones Thyroidiens TSH" }, { id: 54, name: "Kaliemie" }, { id: 55, name: "fistulographie" }, { id: 56, name: "Serologie toxo" }, { id: 57, name: "Serologie rubeole" }, { id: 58, name: "Serologie sphylitique" }, { id: 59, name: "GERH+Frottis" }, { id: 60, name: "Urotro- cystoscopie" }, { id: 61, name: "galactographie" }, { id: 62, name: "pyoculture" }, { id: 63, name: "ETF" }, { id: 64, name: "AC-anti-AVC" }, { id: 65, name: "Dosage d’oestradial" }, { id: 66, name: "AMH" }, { id: 67, name: "Serologie siphilis" }, { id: 68, name: "NFS + réticulocyte" }, { id: 69, name: "Dosage beta HCG" }, { id: 70, name: "Uroculture simple" }, { id: 71, name: "créatinemie" }, { id: 72, name: "Copro-culture" }, { id: 73, name: "Copro-culture+ATB" }, { id: 74, name: "Cholestéroe tota" }, { id: 75, name: "Triglycéride" }, { id: 76, name: "Uricémie ( acide urique)" }, { id: 77, name: "Azotémie( urée)" }, { id: 78, name: "transaminases" }, { id: 79, name: "Protéines totale" }, { id: 80, name: "amylase" }, { id: 81, name: "Albumine" }, { id: 82, name: "ALP" }, { id: 83, name: "bilirubine" }, { id: 84, name: "calcium" }, { id: 85, name: "chlore" }, { id: 86, name: "CPK" }, { id: 87, name: "Gama GT" }, { id: 88, name: "Potassium" }, { id: 89, name: "sodium" }, { id: 90, name: "PV mycoplasme" }, { id: 91, name: "Serologie chlamydia" }, { id: 92, name: "toxoplasmose" }, { id: 93, name: "Rubeole " }, { id: 94, name: "TS" }, { id: 96, name: "TCK" }, { id: 97, name: "TP/INR" }, { id: 98, name: "TC" }, { id: 99, name: "PCA" }, { id: 100, name: "BHCG plasmatiques" }, { id: 101, name: "PV+ATB" }, { id: 102, name: "ECBU+ATB" }, { id: 103, name: "Spermogramme +ATB" }, { id: 104, name: "coproculture" }, { id: 105, name: "T3" }, { id: 106, name: "T4" }, { id: 107, name: "FSH" }, { id: 108, name: "oestradial" }, { id: 109, name: "progesterone" }, { id: 110, name: "Bilurbine directe" }, { id: 111, name: "Bilurbnine indirect" }, { id: 112, name: "HDL" }, { id: 113, name: "LDL " }, { id: 114, name: "CRP" }, { id: 115, name: "magnesemie" }, { id: 116, name: "prolactinemie" }, { id: 117, name: "TPHA" }, { id: 118, name: "Ag-HBS" }, { id: 119, name: "HBA1C" }, { id: 120, name: "Hépatite C" }, { id: 121, name: "Hépatite B" }, { id: 122, name: "Facteurs rhumatoides" }, { id: 123, name: "serologie H pylori " }, { id: 124, name: "Ig-e" }, { id: 125, name: "Hemogramme complet" }, { id: 126, name: "Electrophorese HB" }, { id: 127, name: "Echo-doppler" }, { id: 128, name: "D-Divers" }, { id: 129, name: "F.R" }, { id: 130, name: "TE" }, { id: 131, name: "GRSH" }, { id: 132, name: "EHB" }, { id: 133, name: "SRV" },]
    },


    {
      id: 2, title: "SERVICE DE RADIOLOGIE : NUMERIQUE", image: img22, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },]
    },



    {
      id: 3, title: "Dermatologie", image: img33, enSavoirPlus:
        "La dermatologie est une spécialité médicale dédiée aux maladies de la peau.", examen: [{ id: 1, name: "" }, { id: 2, name: "Photothérapie" }]
    }
  ];

  // Filtrage
  const filtered = services.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.enSavoirPlus.toLowerCase().includes(search.toLowerCase()) ||
      s.examen.some((ex) =>
        ex.name.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Si filtered change et selected est hors-limite -> reset à 0
  useEffect(() => {
    if (filtered.length === 0) {
      setSelected(0);
    } else if (selected >= filtered.length) {
      setSelected(0);
    }
  }, [filtered, selected]);

  // Ouverture auto modal si recherche correspond à un examen
  useEffect(() => {
    if (!search.trim()) return;

    const examMatch = services.find((s) =>
      s.examen.some((ex) =>
        ex.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    if (examMatch) {
      const index = services.indexOf(examMatch);
      setSelected(index);
      setShowExam(true);
    }
  }, [search]);

  // Verrouiller le scroll du body quand une modal est ouverte
  useEffect(() => {
    const locked = showInfo || showExam;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showInfo, showExam]);

  const next = () => {
    if (filtered.length === 0) return;
    setSelected((prev) => (prev + 1) % filtered.length);
  };
  const prev = () => {
    if (filtered.length === 0) return;
    setSelected((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <div className="servicep2">
      <Navbarclinique color1="primary-subtle" />
      <div className="w-full min-h-screen bg-gray-50 px-4 pt-1">
        {/* Barre de recherche */}
        <div className="w-full flex justify-center mb-2">
          <input
            type="text"
            placeholder="Rechercher un service ou un examen..."
            className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 ">Aucun résultat trouvé…</p>
        ) : (
          <>
            {/* Image principale */}
            <div className="relative w-full max-w-3xl mx-auto">
              <img
                src={filtered[selected]?.image}
                alt={filtered[selected]?.title}
                className="w-full md:h-[350px] object-cover rounded-xl shadow-lg"
              />

              {/* Navigation */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
                onClick={prev}
              >
                ◀
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
                onClick={next}
              >
                ▶
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 text-white rounded-lg">
                {filtered[selected]?.title}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 justify-center mt-4 mb-3">
              <button className="btn btn-primary" onClick={() => setShowInfo(true)}>
                En savoir plus
              </button>
              <button className="btn btn-success" onClick={() => setShowExam(true)}>
                Examens
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6 servicep23">
              {filtered.map((item, i) => (
                <div
                  key={item.id ?? i}
                  onClick={() => setSelected(i)}
                  className={`cursor-pointer p-1 rounded-lg border ${i === selected ? "border-blue-600" : "border-transparent"
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-full object-cover rounded-md"
                  />
                  <p className="text-center text-sm mt-1 font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal Info (structure Bootstrap correcte pour scroll) */}
        {showInfo && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{filtered[selected]?.title}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowInfo(false)} />
                </div>

                <div className="modal-body">
                  <p>{filtered[selected]?.enSavoirPlus}</p>

                  {/* Tu peux ajouter d'autres infos détaillées ici */}
                  <hr className="my-3" />
                  <p><strong>ID :</strong> {filtered[selected]?.id}</p>
                  <p><strong>Titre :</strong> {filtered[selected]?.title}</p>
                  <p><strong>Nombre d'examens :</strong> {filtered[selected]?.examen?.length ?? 0}</p>

                  {/* Exemple d'un grand contenu pour tester le scroll */}
                  <div style={{ minHeight: 400 }}>
                    <p className="mt-3">
                      {Array.from({ length: 20 }).map((_, k) => (
                        <span key={k}>Ligne de détail supplémentaire #{k + 1}. <br /></span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowInfo(false)}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Examens (titre inclut le nom du service) */}
        {showExam && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Examens disponibles — {filtered[selected]?.title}
                  </h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowExam(false)} />
                </div>

                <div className="modal-body">
                  <ul>
                    {filtered[selected]?.examen?.map((ex) => (
                      <li key={ex.id} className="mb-2">• {ex.name || "Examen non renseigné"}</li>
                    ))}
                  </ul>

                  {/* si tu veux tester le scroll, garde ce bloc */}
                  <div style={{ minHeight: 200 }} />
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowExam(false)}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
