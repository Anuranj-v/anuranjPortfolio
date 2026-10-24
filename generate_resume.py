import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

def generate_resume(output_path):
    # Page setup - 0.5 inch margins all around to fit on one crisp page
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Define custom typography styles
    primary_color = colors.HexColor("#1e293b")
    text_color = colors.HexColor("#334155")
    muted_color = colors.HexColor("#64748b")
    line_color = colors.HexColor("#cbd5e1")

    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=20,
        leading=24,
        alignment=1, # Centered
        textColor=primary_color,
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=text_color,
        spaceAfter=2
    )

    section_heading = ParagraphStyle(
        'ResumeHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=12,
        leading=15,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=12.5,
        textColor=text_color,
    )

    bold_label = ParagraphStyle(
        'ResumeBoldLabel',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=12.5,
        textColor=text_color,
    )

    item_title_left = ParagraphStyle(
        'ItemTitleLeft',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=9.5,
        leading=13,
        textColor=primary_color,
    )

    item_title_right = ParagraphStyle(
        'ItemTitleRight',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=9,
        leading=13,
        alignment=2, # Right aligned
        textColor=muted_color,
    )

    sub_left = ParagraphStyle(
        'SubLeft',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=12,
        textColor=text_color,
    )

    sub_right = ParagraphStyle(
        'SubRight',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=9,
        leading=12,
        alignment=2,
        textColor=muted_color,
    )

    tools_style = ParagraphStyle(
        'ToolsStyle',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=1.5
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>ANURANJ V</b>", name_style))
    story.append(Paragraph("Kerala, India &nbsp;|&nbsp; +91 8891848165 &nbsp;|&nbsp; anuranj1122@gmail.com", contact_style))
    story.append(Paragraph("<u>linkedin.com/in/anuranjv</u>", contact_style))
    story.append(Spacer(1, 4))

    # Helper function for section line
    def add_section_header(title):
        story.append(Paragraph(f"<b>{title}</b>", section_heading))
        story.append(HRFlowable(width="100%", thickness=0.75, color=line_color, spaceBefore=1, spaceAfter=4))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "Analytical and detail-oriented Data Analyst with hands-on experience in data cleaning, "
        "exploratory data analysis, data transformation, and interactive dashboard development. "
        "Skilled in SQL, Python, Microsoft Excel, Power BI, and Power Query. "
        "Experienced in transforming raw datasets into meaningful insights, tracking KPIs, "
        "analyzing business performance, and presenting data through interactive visualizations."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Technical Skills
    add_section_header("Technical Skills")
    skills_data = [
        ("Data Analysis:", "Exploratory Data Analysis (EDA), data cleaning, data transformation, data validation"),
        ("Programming & Database:", "SQL, Python"),
        ("Business Intelligence:", "Microsoft Power BI, Power BI Service, Tableau"),
        ("Data Modeling:", "DAX, Power Query, Star Schema, calculated columns, measures"),
        ("Microsoft Excel:", "Pivot Tables, Pivot Charts, XLOOKUP, INDEX/MATCH, Nested IF Functions"),
        ("Visualization:", "Interactive dashboards, KPI tracking, trend analysis, visual storytelling"),
    ]
    for label, items in skills_data:
        story.append(Paragraph(f"<b>{label}</b> {items}", bold_label))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 3))

    # 4. Professional Training
    add_section_header("Professional Training")
    t1 = Table([
        [Paragraph("<b>Data Analytics Professional Training</b>", item_title_left), Paragraph("2026–Present", item_title_right)],
        [Paragraph("Camerin Innovative", sub_left), Paragraph("Ongoing", sub_right)]
    ], colWidths=[380, 160])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Developing practical skills in data analysis, data cleaning, visualization, and business intelligence.", bullet_style))
    story.append(Paragraph("&bull; Training with SQL, Python, Excel, Power BI, DAX, and Power Query.", bullet_style))
    story.append(Paragraph("&bull; Applying data analysis techniques to datasets and business scenarios.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Projects
    add_section_header("Projects")
    
    # Project 1: Sales Performance
    p1 = Table([
        [Paragraph("<b>Sales Performance & Growth Analysis Dashboard</b>", item_title_left), Paragraph("Camerin Innovative | 2026", item_title_right)],
    ], colWidths=[380, 160])
    p1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(p1)
    story.append(Paragraph("<i>Tools: Excel</i>", tools_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("&bull; Developed an interactive dashboard tracking sales of 47.68+ Cr, 89,464 orders, and 28,639 customers.", bullet_style))
    story.append(Paragraph("&bull; Created slicers for year, product, and salesperson to support detailed business analysis.", bullet_style))
    story.append(Paragraph("&bull; Analyzed 10 sales representatives and identified sales and order trends.", bullet_style))
    story.append(Paragraph("&bull; Evaluated sales growth from 2021 to 2024 using DAX measures and monthly time-series charts.", bullet_style))
    story.append(Paragraph("&bull; Analyzed the top five revenue-generating products.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: Indian Bikes Sales
    p2 = Table([
        [Paragraph("<b>Indian Bikes Sales & Market Analysis</b>", item_title_left), Paragraph("Camerin Innovative | 2026", item_title_right)],
    ], colWidths=[380, 160])
    p2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(p2)
    story.append(Paragraph("<i>Tools: Power BI</i>", tools_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("&bull; Analyzed 1,000 bike models across eight manufacturers to evaluate pricing and market performance.", bullet_style))
    story.append(Paragraph("&bull; Used Power Query for data cleaning, transformation, and preparation.", bullet_style))
    story.append(Paragraph("&bull; Segmented inventory into Budget, Mid-Range, and Premium categories.", bullet_style))
    story.append(Paragraph("&bull; Built interactive visuals to compare brand pricing and market segments.", bullet_style))
    story.append(Paragraph("&bull; Examined pricing patterns and consumer purchase behavior across motorcycle brands.", bullet_style))
    story.append(Spacer(1, 4))

    # 6. Education
    add_section_header("Education")
    edu_table = Table([
        [Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", item_title_left), Paragraph("2023–2026", item_title_right)],
        [Paragraph("Yeldo Baselios College, Kothamangalam", sub_left), Paragraph("May 2026", sub_right)]
    ], colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 7. Key Strengths & Languages
    add_section_header("Key Strengths & Languages")
    story.append(Paragraph("<b>Analytical thinking</b> &nbsp;|&nbsp; <b>Problem solving</b> &nbsp;|&nbsp; <b>Attention to detail</b>", bold_label))
    story.append(Spacer(1, 2))
    story.append(Paragraph("English &nbsp;|&nbsp; Malayalam &nbsp;|&nbsp; Hindi", body_style))

    doc.build(story)
    print(f"Successfully generated resume PDF at: {output_path}")

if __name__ == '__main__':
    out_dir = r"c:\Users\anura\Desktop\anuranjPortfolio\public"
    os.makedirs(out_dir, exist_ok=True)
    generate_resume(os.path.join(out_dir, "resume.pdf"))
