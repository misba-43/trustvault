const documentImage =
    document.getElementById("documentImage");

const previewArea =
    document.getElementById("previewArea");

const ocrSection =
    document.getElementById("ocrSection");

const ocrText =
    document.getElementById("ocrText");


documentImage.addEventListener(
    "change",
    function () {

        const file =
            documentImage.files[0];

        if (!file) {
            return;
        }


        /* SHOW IMAGE PREVIEW */

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                previewArea.innerHTML = `

                    <img
                        src="${event.target.result}"
                        alt="Document preview"
                        style="
                            max-width:100%;
                            max-height:450px;
                            border-radius:16px;
                            margin-bottom:20px;
                        "
                    >

                    <br>

                    <button
                        type="button"
                        id="extractTextButton"
                        class="dashboard-primary-button">

                        ✦ Extract Text

                    </button>

                `;


                document
                    .getElementById(
                        "extractTextButton"
                    )
                    .addEventListener(
                        "click",
                        function () {

                            extractText(
                                event.target.result
                            );

                        }
                    );

            };


        reader.readAsDataURL(file);

    }
);



/* OCR */

function extractText(image) {

    ocrSection.style.display =
        "block";

    ocrText.value =
        "Reading document...";


    if (
        typeof Tesseract ===
        "undefined"
    ) {

        ocrText.value =
            "OCR library is not connected yet.";

        return;

    }


    Tesseract.recognize(
        image,
        "eng",
        {
            logger: function (info) {

                if (
                    info.status ===
                    "recognizing text"
                ) {

                    const progress =
                        Math.round(
                            info.progress * 100
                        );

                    ocrText.value =
                        "Reading document... " +
                        progress +
                        "%";

                }

            }

        }

    ).then(
        function (result) {

            ocrText.value =
                result.data.text;

        }

    ).catch(
        function () {

            ocrText.value =
                "Unable to read this document. Please try a clearer image.";

        }
    );

}

const savePdfButton =
    document.getElementById("savePdfButton");


if (savePdfButton) {

    savePdfButton.addEventListener(
        "click",
        function () {

            const image =
                document.querySelector(
                    "#previewArea img"
                );


            if (!image) {

                alert(
                    "Please upload a document image first."
                );

                return;

            }


            const pdf =
                new jspdf.jsPDF();


            const pageWidth =
                pdf.internal.pageSize.getWidth();


            const pageHeight =
                pdf.internal.pageSize.getHeight();


            const imageWidth =
                image.naturalWidth;


            const imageHeight =
                image.naturalHeight;


            const ratio =
                Math.min(
                    pageWidth / imageWidth,
                    pageHeight / imageHeight
                );


            const width =
                imageWidth * ratio;


            const height =
                imageHeight * ratio;


            const x =
                (pageWidth - width) / 2;


            const y =
                (pageHeight - height) / 2;


            pdf.addImage(
                image.src,
                "JPEG",
                x,
                y,
                width,
                height
            );


            pdf.save(
                "TrustVault-Document.pdf"
            );

        }
    );

}